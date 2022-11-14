class Auto {
  accept(visitor) {
    visitor(this);
  }
}

module.exports = Auto;
