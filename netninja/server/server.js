'use strict'

const http = require('http');

const fs = require('fs');

//create a readable stream
//without utf8 enconding it just dosplays as numbers
const readStream = fs.createReadStream(__dirname + '/source.txt', 'utf8');

const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');


//write to file with the method
readStream.on('data', (chunk) => {
  console.log('new chunk received');
  writeStream.write(chunk);
});

// const server = http.createServer((req, res) => {
//   console.log('reqest was made: ' + req.url);
//   res.writeHead(200, {
//     'Content-Type': 'text/plain',
//     'name': 'Paige',
//     'say': 'What',
//   }
// );
//   res.end('hello there');
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('listening to port 3000');
// });
