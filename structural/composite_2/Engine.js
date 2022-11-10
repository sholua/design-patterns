const Equipment = require("./Equipment");

class Engine extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(800);
  }
}

module.exports = Engine;
