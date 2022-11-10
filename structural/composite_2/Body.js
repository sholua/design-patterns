const Equipment = require("./Equipment");

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(3000);
  }
}

module.exports = Body;
