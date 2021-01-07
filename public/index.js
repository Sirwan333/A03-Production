var socket=io() 
  
// connection with server 
socket.on('connect', function(){ 
  console.log('Connected to Server') 
  
}); 
  
// message listener from server 
socket.on('message', function(message){ 
 displayNotification(message)
}); 
  
// when disconnected from server 
socket.on('disconnect', function(){ 
  console.log('Disconnect from server') 
}); 

function displayNotification(message) {
  if (message.action === 'open') {
    const div = document.createElement('div')
    div.className = 'bothP'
    div.innerHTML = `
    <p class = 'noti'>New Notification</p>
    <p class = 'divCon'>Action: New issue is opened <br> Issue Title: ${message.title} <br> Author: ${message.name}  </p>`
    document.querySelector('.cont').appendChild(div)
  } else if (message.action === 'close') {
    const div = document.createElement('div')
    div.className = 'bothP'
    div.innerHTML = `
    <p class = 'noti'>New Notification</p>
    <p class = 'divCon'>Action: Issue is closed <br> Issue Title: ${message.title} <br> Author: ${message.name}  </p>`
    document.querySelector('.cont').appendChild(div)
  } else if (message.action === 'reopen') {
    const div = document.createElement('div')
    div.className = 'bothP'
    div.innerHTML = `
    <p class = 'noti'>New Notification</p>
    <p class = 'divCon'>Action: Issue is reopend <br> Issue Title: ${message.title} <br> Author: ${message.name}  </p>`
    document.querySelector('.cont').appendChild(div)
  } else if (message.action === 'new comment') {
    const div = document.createElement('div')
    div.className = 'bothP'
    div.innerHTML = `
    <p class = 'noti'>New Notification</p>
    <p class = 'divCon'>Action: New comment <br> Issue Title: ${message.title} <br> Author: ${message.name} <br> Comment: ${message.text}  </p>`
    document.querySelector('.cont').appendChild(div)
    document.querySelectorAll('.title').forEach((el) => {
      if (el.innerText === `Issue #${message.number}`) {
        const pa = document.createElement('span')
        pa.className = 'comm'
        pa.innerHTML = '<span> New Comment </span>'
        el.append(pa)
      }
    })
    
  }
  
}