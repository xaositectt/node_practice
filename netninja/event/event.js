const events = require('events');
const util = require('util');

//you can create custom events and react to them when they're emitted

const emitter = new events.EventEmitter();

emitter.on('someEvent', (msg) => {
  console.log(msg);
});

emitter.emit('someEvent', 'love Paige');


const Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

const Paige = new Person('Paige');
const Leila = new Person('Leila');
const people = [Paige, Leila];

people.forEach((person) => {
  person.on('speak', (msg) => {
    console.log(person.name, 'said:', msg)
  });
});


Paige.emit('speak', 'I love you');
Leila.emit('speak', 'I love you too');
