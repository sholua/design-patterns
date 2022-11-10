const CarAccess = require('./CarAccess');
const SecuritySystem = require('./SecuritySystem');

const door = new SecuritySystem(new CarAccess());

door.open('Jack');
door.open('Ilon');
door.close();