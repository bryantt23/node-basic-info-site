const express = require('express');
const app = express();
var path = require('path');
// https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact-me', function (req, res) {
  res.sendFile(path.join(__dirname + '/contact-me.html'));
});

// https://stackoverflow.com/questions/11500204/how-can-i-get-express-js-to-404-only-on-missing-routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/404.html'));
});

app.listen(8080);
