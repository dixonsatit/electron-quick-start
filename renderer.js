// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// get app version
let version = require('electron').remote.app.getVersion();
// Initial display version 
document.getElementById('version').innerText = version;

// Import ipcRenderer, this module is electron api to comunicate with main and renderer process
const {ipcRenderer} = require('electron');

/** 
 * Listen for messages from main process
 * If the main process send data key name "message" 
 * renderer process with receive data and working in callback function
 * 
 * This function just receive and display it in tag id "messages"
 * to response what auto updater working now
*/
ipcRenderer.on('message', function(event, text) {
  var container = document.getElementById('messages');
  var message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
})