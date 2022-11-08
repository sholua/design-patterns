const bmwProducer = require('./bmwProducer');

const Produce = new bmwProducer();

const myCar = new Produce();

console.log(myCar.info());