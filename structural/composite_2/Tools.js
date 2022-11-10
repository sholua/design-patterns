const Equipment = require("./Equipment");

class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(4000);
  }
}

module.exports = Tools;
