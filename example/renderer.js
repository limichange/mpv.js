"use strict";

const path = require("path");
const player = document.getElementById('testPlayer');

player.postMessage({
  "type": "command",
  "data": [
    "loadfile", path.join(__dirname, "tos.mkv")
  ]
})

document.getElementById('playBtn').addEventListener('click', () => {
  player.postMessage({
    "type": "set_property",
    "data": {
      "name": "pause",
      "value": false
    }
  })
})

document.getElementById('pauseBtn').addEventListener('click', () => {
  player.postMessage({
    "type": "set_property",
    "data": {
      "name": "pause",
      "value": true
    }
  })
})
