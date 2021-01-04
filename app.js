var express = require('express')
var path = require('path')
var hbs = require('express-hbs')
var app = express()



app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default')
}))

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/home'))
app.set('views', path.join(__dirname, 'views'))
app.listen(3000, () => { console.log('Server is running at http://localhost:3000') })
