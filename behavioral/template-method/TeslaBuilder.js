const Builder = require('./Builder');

class TeslaBuilder extends Builder {
  addEngine() {
    console.log("Add Electronic Engine");
  }

  installChassis() {
    console.log("Install Tesla chassis");
  }

  addElectronic() {
    console.log("Add special electronic");
  }

  collectAccessories() {
    console.log("Collect Accessories");
  }
}

module.exports = TeslaBuilder;
