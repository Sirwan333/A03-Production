const request = require('request')
const io = require('../app.js').io

/**
 * It sends http request to gitlab api to requst current issues.
 *
 * @param {any} req http request.
 * @param {any} response http response.
 */
const index = (req, response) => {
  const options1 = {
    url: `https://gitlab.lnu.se/api/v4/projects/10737/issues?private_token=${process.env.TOKEN}`,
    json: true
  }
  request.get(options1, async (err, res, html) => {
    if (!err && res.statusCode === 200) {
      let i = 0
      let viewData
      const array = []
      // eslint-disable-next-line no-unused-vars
      for (const jsonData of html) {
        array.push(
          // eslint-disable-next-line no-unused-vars
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
      response.render('custom/home', { array })
    }
  })
}

/**
 * It sends issues notifications to client via socket.io after reciving it from gitlab hook.
 *
 * @param {any} req http request.
 * @param {any} res http response.
 */
const hookPost = (req, res) => {
  if (req.headers['x-gitlab-token'] === process.env.SECRET) {
    if (req.body.object_kind === 'issue') {
      // eslint-disable-next-line no-undef
      viewData = {
        action: req.body.object_attributes.action,
        name: req.body.user.name,
        title: req.body.object_attributes.title
      }
    } else {
      // eslint-disable-next-line no-undef
      viewData = {
        action: 'new comment',
        name: req.body.user.name,
        title: req.body.issue.title,
        text: req.body.object_attributes.description,
        number: req.body.issue.iid
      }
    }
    // eslint-disable-next-line no-undef
    io.emit('message', viewData)
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
}

module.exports = { index, hookPost }
