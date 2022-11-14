const AutoCart = require('./AutoCart');
const baseStrategy = require("./baseStrategy");
const platinumStrategy = require('./platinumStrategy');
const premiumStrategy = require('./premiumStrategy');

const baseCustomer = new AutoCart(baseStrategy)
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout());

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout());

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout());