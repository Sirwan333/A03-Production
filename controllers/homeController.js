const request = require('request')


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
                created_at: html[i].created_at
              }
            )
           
            i++
            
          }
          
          console.log(array)
           
          
              response.render('custom/home', { array})
        }
      })
  
  }

  const hookPost = (req, res) => {
    
    const viewData = {
        name: req.body.user.name,
        username: req.body.object_kind 
      }
      res.render('custom/test', { viewData})
      console.log('done')
  
  }

  
  module.exports = { index, hookPost }
  