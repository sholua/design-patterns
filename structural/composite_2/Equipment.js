class Equipment {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setPrice(price) {
    this.price = price;
  }

  getPrice() {
    return this.price || 0;
  }
}

module.exports = Equipment;
