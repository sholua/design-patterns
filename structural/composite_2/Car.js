const Composite = require("./Composite");

class Car extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

module.exports = Car;
