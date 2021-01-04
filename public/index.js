var socket=io() 
  
// connection with server 
socket.on('connect', function(){ 
  console.log('Connected to Server') 
  
}); 
  
// message listener from server 
socket.on('newMessage', function(message){ 
 console.log(message); 
}); 
  
// when disconnected from server 
socket.on('disconnect', function(){ 
  console.log('Disconnect from server') 
}); 