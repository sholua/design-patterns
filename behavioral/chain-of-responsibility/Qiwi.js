const Account = require("./Account");

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = "Qiwi";
    this.balance = balance;
  }
}

module.exports = Qiwi;
