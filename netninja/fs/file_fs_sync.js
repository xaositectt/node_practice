'use strict'

const fs = require('fs');

//synchronous method to read a file
let readMe =  fs.readFileSync('something.txt', 'utf8');

//synchronous method to write a files
fs.writeFileSync('writeMe.txt', readMe);

console.log(readMe);