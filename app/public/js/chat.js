
var socket = io();

var chatUsername = document.querySelector('#nodex-chat-name');
var chatMessage = document.querySelector('#nodex-chat-message');

socket.on('connect', function () {
  var chatForm = document.forms.chatForm;

  if(chatForm){


    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      socket.emit('postMessage',{
        username: chatUsername.value,
        message: chatMessage.value
      });

      chatMessage.value = '';
      chatMessage.focus();

    }); //chatForm

    socket.on('updateMessages', function (data) {
      showMessage(data);
    });
  }

}); //socket


function showMessage(data) {
  var chatDisplay = document.querySelector('.chat-window');
  var newMessage = document.createElement('p');
  if(chatUsername.value == data.username){
    newMessage.className = 'success-message  selfie chat-text';
  }
  else{
    newMessage.className = 'success-message chat-text';
  }

  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;

  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
