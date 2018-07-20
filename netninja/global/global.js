'use strict'

//global object properties to log the current directory or files
console.log(__dirname);
console.log(__filename);

let timer = setInterval(function(){
    console.log('hi');
  }, 1000);


setTimeout(function(){
  clearInterval(timer);
}, 3000);