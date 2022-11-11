const Account = require("./Account");

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = "Paypal";
    this.balance = balance;
  }
}

module.exports = Paypal;
