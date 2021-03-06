const express = require('express')
const path = require('path')
const hbs = require('express-hbs')
const app = express()
const http = require('http')
const server = http.createServer(app)
const session = require('express-session')
const PORT = process.env.PORT || 3000

const io = exports.io = require('socket.io')(server)
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'keyboard cat'
}))

io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('createMessage', (newMessage) => {
    console.log('newMessage', newMessage)
  })
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default')
}))
app.use(express.json())
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/home'))
app.set('views', path.join(__dirname, 'views'))
server.listen(PORT, () => { console.log(`Server is running at http://localhost:${server.address().port}`) })
