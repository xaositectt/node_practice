'use strict'

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('reqest was made: ' + req.url);
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'name': 'Paige',
    'say': 'What',
  }
);
  res.end('hello there');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('listening to port 3000');
});
