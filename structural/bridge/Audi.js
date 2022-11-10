const Model = require("./Model");

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    // bridge between model and color
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

module.exports = Audi;
