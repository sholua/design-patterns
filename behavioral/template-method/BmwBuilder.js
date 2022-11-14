const Builder = require("./Builder");

class BmwBuilder extends Builder {
  addEngine() {
    console.log("Add BMW Engine");
  }

  installChassis() {
    console.log("Install BMW chassis");
  }

  addElectronic() {
    console.log("Add electronic");
  }

  collectAccessories() {
    console.log("Collect Accessories");
  }
}

module.exports = BmwBuilder;
