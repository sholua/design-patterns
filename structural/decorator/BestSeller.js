class BestSeller {
  constructor(baseCourse) {
    if (baseCourse) {
      Object.assign(this, baseCourse);
    }
    this.name = baseCourse.name + " is BestSeller";
  }
}

module.exports = BestSeller;
