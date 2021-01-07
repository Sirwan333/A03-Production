const request = require('request')
const io = require('../app.js').io;



const index = (req, response) => {
    
    const options1 = {
        url: 'https://gitlab.lnu.se/api/v4/projects/10737/issues?private_token=HDgNS-JxERFt58RBY9C-',
        json: true
      }
      request.get(options1, async (err, res, html) => {
  
        if (!err && res.statusCode === 200) {
          let i = 0;
          let viewData;
          let array = [];
          for(jsonData of html){
            array.push (
              viewData = {
                name: html[i].author.name,
                state: html[i].state,
                description: html[i].description,
                updated_at: html[i].updated_at,
                short: html[i].references.short,
                web_url: html[i].web_url,
                title: html[i].title,
                created_at: html[i].created_at,
                user_notes_count: html[i].user_notes_count 
              }
            )
           
            i++
            
          }
              response.render('custom/home', { array})
        }
      })
  
  }

  const hookPost = (req, res) => {
    if (req.body.object_kind === 'issue') {
      viewData = {
        action: req.body.object_attributes.action,
        name: req.body.user.name,
        title: req.body.object_attributes.title
      }
    } else {
      viewData = {
        action: 'new comment',
        name: req.body.user.name,
        title: req.body.issue.title,
        text: req.body.object_attributes.description,
        number: req.body.issue.iid
      } 
    }
    io.emit('message', viewData)
  }

  module.exports = { index, hookPost }
  