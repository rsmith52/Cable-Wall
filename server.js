console.log('server.js started');

// Load Express and Path packages and Create App
var express = require('express');
var app = express();
var path = require('path');

// Send our index.html file to the user for the home page
app.use(express.static(__dirname + '/dist/my-app'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/my-app/index.html'));
});

// Start the server
app.listen(1337);
console.log('App running on port 1337');
