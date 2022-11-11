const Customer = require("./Customer");
const OfficialDealer = require("./OfficialDealer");

const mediator = new OfficialDealer();

const alex = new Customer("Alex", mediator);
const john = new Customer("John", mediator);

alex.makeOrder('Tesla', 'With autopilot');
john.makeOrder('Audi', 'With parktronik');

console.log(mediator.getCustomerList());
