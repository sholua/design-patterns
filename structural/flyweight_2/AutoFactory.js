const Auto = require("./Auto");

class AutoFactory {
  constructor(model) {
    this.models = {};
  }

  create(model) {
    let existingModel = this.models[model];
    if (existingModel) return existingModel;

    this.models[model] = new Auto(model);
    return this.models[model];
  }

  getModels() {
    console.log(this.models);
  }
}

module.exports = AutoFactory;
