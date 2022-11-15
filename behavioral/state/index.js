const Order = require("./Order");

const myOrder = new Order();

console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);
