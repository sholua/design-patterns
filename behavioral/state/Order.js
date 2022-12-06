const WaitingForPayment = require("./WaitingForPayment");

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    this.state.name === "watingforPayment"
      ? console.log("Order is canceled")
      : console.log("Order cannot be canceled");
  }
}

module.exports = Order;
