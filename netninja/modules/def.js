const shutup = function() {
  console.log('shut up already');
}

const hello = function() {
  console.log('hello there');
}

const bye = function() {
  console.log('bye');
}

// this works too
// module.exports.shutup = shutup;
// module.exports.hello = hello;
// module.exports.bye = bye;

// or this
module.exports = {
  shutup: shutup,
  hello: hello,
  bye: bye,
}


