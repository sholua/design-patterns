const BmwFactory = require('./BmwFactory');

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(x5);
console.log(x6);