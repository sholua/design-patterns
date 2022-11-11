const Account = require("./Account");

class Master extends Account {
  constructor(balance) {
    super();
    this.name = "Master Card";
    this.balance = balance;
  }
}

module.exports = Master;
