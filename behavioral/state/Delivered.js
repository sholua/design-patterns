const OrderStatus = require("./OrderStatus");

class Delivered extends OrderStatus {
  constructor() {
    super("delivered", Delivered);
  }
}

module.exports = Delivered;
