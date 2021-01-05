const request = require('request')


const index = (req, response) => {
    
    const options1 = {
        url: 'https://gitlab.lnu.se/api/v4/projects/10737/issues?private_token=HDgNS-JxERFt58RBY9C-',
        json: true
      }
      request.get(options1, async (err, res, html) => {
  
        if (!err && res.statusCode === 200) {
            const viewData = {
                name: html[0].author.name,
                username: html[0].author.username 
              }
          
              response.render('custom/home', { viewData})
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
  