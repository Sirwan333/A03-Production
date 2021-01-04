var express = require('express')
var path = require('path')
var hbs = require('express-hbs')
var app = express()
const socketIO = require('socket.io'); 
const http = require('http') 
let server = http.createServer(app) 


let io = socketIO(server) 
io.on('connection', (socket)=>{
    console.log('User connected');
    socket.on('createMessage', (newMessage)=>{ 
        console.log('newMessage', newMessage); 
      });
      socket.on('disconnect', ()=>{ 
        console.log('User disconnected'); 
      });
  });
  
  
app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default')
}))

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/home'))
app.set('views', path.join(__dirname, 'views'))
server.listen(3000, () => { console.log('Server is running at http://localhost:3000') })
