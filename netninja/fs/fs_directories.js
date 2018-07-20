'use strict'

const fs = require('fs');

fs.mkdirSync('./shit'); //or just shit

fs.mkdir('what', () => {
  fs.readFile('./something.txt', 'utf8', (err, data) => {
    fs.writeFile('./what/something_else.txt', data);
  });
});

//removes the file path and file and copies it to the 
//target path in the callback
fs.unlink('./path', callback())