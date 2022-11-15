const WaitingForPayment = require('./WaitingForPayment');

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }
}

module.exports = Order;
