const OrderStatus = require("./OrderStatus");
const Shipping = require("./Shipping");

class WaitingForPayment extends OrderStatus {
  constructor() {
    super("waitingForPayment", Shipping);
  }
}

module.exports = WaitingForPayment;
