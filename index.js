const http = require('http');
const fs = require('fs');

// https://flaviocopes.com/node-serve-html-page/
const server = http.createServer((req, res) => {
  //   debugger;
  const { url } = req;
  if (url === '/index' || url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('about.html').pipe(res);
  } else if (url === '/contact-me') {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('contact-me.html').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('404.html').pipe(res);
  }
});

server.listen(process.env.PORT || 3000);
