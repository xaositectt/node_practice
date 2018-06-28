const shutup = function() {
  console.log('shut up already');
}

const hello = function() {
  console.log('hello there');
}

const bye = function() {
  console.log('bye');
}

module.exports.shutup = shutup;
module.exports.hello = hello;
module.exports.bye = bye;
