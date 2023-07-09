function typeWriterEffect(text) {
  var termElement = document.getElementById('term');
  var index = 0;
  var speed = 100; 

  function type() {
    if (index < text.length) {
      termElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      showMainMenu();
    }
  }

  type();
}

function showMainMenu() {
  var splashScreen = document.getElementById('splashScreen');
  var container = document.getElementById('container');

  splashScreen.style.display = 'none';
  container.style.display = 'block';
}

var splashScreen = document.getElementById('splashScreen');
splashScreen.addEventListener('click', showMainMenu);

var messageInput = document.getElementById('messageInput');
var sendButton = document.getElementById('sendButton');
var chatContainer = document.getElementById('chat');

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function botImage(imageSrc) {
  var chatList = document.getElementById('chat');
  var listItem = document.createElement('li');
  listItem.classList.add('bot');
  var headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');

  var timeSpan = document.createElement('h3');
  var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  timeSpan.textContent = currentTime;

  var nameHeading = document.createElement('h2');
  nameHeading.textContent = 'Kagami';

  var statusSpan = document.createElement('span');
  statusSpan.classList.add('status');
  statusSpan.classList.add('green');

  headingDiv.appendChild(statusSpan);
  headingDiv.appendChild(timeSpan);

  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  var imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  var image = document.createElement('img');
  image.src = imageSrc;
  image.style.width = '160px';
  image.style.height = '160px';
  image.style.marginRight = '70%';
  imageContainer.appendChild(image);

  messageDiv.appendChild(imageContainer);
  listItem.appendChild(headingDiv);
  listItem.appendChild(messageDiv);
  chatList.appendChild(listItem);
  scrollToBottom();
}

function removeAudio() {
  var chatList = document.getElementById('chat');
  var lastBotMessage = chatList.querySelector('.bot:last-child');
  if (lastBotMessage) {
    lastBotMessage.remove();
  }
}

function botAudio() {
  var chatList = document.getElementById('chat');

  var listItem = document.createElement('li');
  listItem.classList.add('bot');

  var headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');

  var timeSpan = document.createElement('h3');
  var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  timeSpan.textContent = currentTime;

  var nameHeading = document.createElement('h2');
  nameHeading.textContent = 'Kagami';

  var statusSpan = document.createElement('span');
  statusSpan.classList.add('status');
  statusSpan.classList.add('green');

  headingDiv.appendChild(statusSpan);
  headingDiv.appendChild(timeSpan);

  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  var audioButton = document.createElement('button');
  audioButton.addEventListener('click', function () {
    playAudio();
  });

  messageDiv.appendChild(audioButton);
  listItem.appendChild(headingDiv);
  listItem.appendChild(messageDiv);
  chatList.appendChild(listItem);
  scrollToBottom();
}

function addMessageBot(message) {
  var chatList = document.getElementById('chat');

  var listItem = document.createElement('li');
  listItem.classList.add('bot');

  var headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');

  var timeSpan = document.createElement('h3');
  var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  timeSpan.textContent = currentTime;

  var nameHeading = document.createElement('h2');
  nameHeading.textContent = 'Kagami';

  var statusSpan = document.createElement('span');
  statusSpan.classList.add('status');
  statusSpan.classList.add('green');

  headingDiv.appendChild(statusSpan);
  headingDiv.appendChild(timeSpan);

  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.textContent = message;

  listItem.appendChild(headingDiv);
  listItem.appendChild(messageDiv);

  chatList.appendChild(listItem);
  scrollToBottom();
}

function playAudio() {
  eel.play_audio();
}

function addMessageUser(message) {
  var chatList = document.getElementById('chat');
  var listItem = document.createElement('li');
  listItem.classList.add('me');

  var headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');

  var timeSpan = document.createElement('h3');
  var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit'
  });
  timeSpan.textContent = currentTime;

  var nameHeading = document.createElement('h2');
  nameHeading.textContent = 'bot';

  var statusSpan = document.createElement('span');
  statusSpan.classList.add('status');
  statusSpan.classList.add('blue');

  headingDiv.appendChild(timeSpan);
  headingDiv.appendChild(statusSpan);

  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.textContent = message;
  eel.handleinput(message);

  listItem.appendChild(headingDiv);
  listItem.appendChild(messageDiv);

  chatList.appendChild(listItem);
  scrollToBottom();
}

function sendMessage() {
  var message = messageInput.value;
  if (message.trim() !== '') {
    addMessageUser(message);
    messageInput.value = '';
    messageInput.focus();
    messageInput.value = '';
  }
}

var textarea = document.getElementById('jsonTextarea');

async function loadConfig() {
  try {
    const data = await eel.read_config_file()();
    if (data) {
      var keyValuePairs = Object.entries(data);
      var keyValueStrings = keyValuePairs.map(([key, value]) => `${key}: ${value}`);
      var joinedKeyValueStrings = keyValueStrings.join('\n');
      textarea.value = joinedKeyValueStrings;
    } else {
      textarea.value = 'Failed to load config.json';
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function saveJSON() {
  try {
    var keyValueStrings = textarea.value.split('\n');
    var updatedConfig = {};
    keyValueStrings.forEach((keyValueString) => {
      var [key, value] = keyValueString.split(':').map((item) => item.trim());
      updatedConfig[key] = value;
    });
    eel.save_config_file(updatedConfig)(function (response) {
      if (response) {
        alert('Config saved successfully!');
        location.reload();
      } else {
        alert('Failed to save config.');
      }
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to save config.');
  }
}

window.addEventListener('DOMContentLoaded', function () {
  typeWriterEffect('run pywaifu.sh\nload translation\ntranslation loaded');
  loadConfig();
});

const toggleButton = document.getElementById('configbutton');
const panel = document.getElementById('panel');

toggleButton.addEventListener('click', function () {
  panel.classList.toggle('active');
});

var backButton = document.querySelector('.back-button');
backButton.addEventListener('click', function () {
  panel.classList.remove('active');
});

var imageSrc = 'waifu/anger2.png';
eel.expose(botResponse);

function botResponse(output) {
  addMessageBot(output);
  setTimeout(function () {
    botImage(imageSrc);
    setTimeout(function () {
      botAudio();
    }, 1000);
  }, 500);
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
    event.preventDefault();
  }
});
