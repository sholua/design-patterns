const OrderStatus = require("./OrderStatus");
const Delivered = require("./Delivered");

class Shipping extends OrderStatus {
  constructor() {
    super("shipping", Delivered);
  }
}

module.exports = Shipping;
