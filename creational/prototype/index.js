const TeslaCar = require('./TeslaCar');

// Produce base auto
const prototypeCar = new TeslaCar('S', 60000, 'black', false);

// Clone base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Chages for particular auto
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);
console.log(car2);
console.log(car3);