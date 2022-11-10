const Car = require("./Car");
const Engine = require("./Engine");
const Body = require("./Body");
const Tools = require("./Tools");

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`);