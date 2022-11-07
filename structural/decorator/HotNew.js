class HotNew {
  constructor(baseCourse) {
    if (baseCourse) {
      Object.assign(this, baseCourse);
    }
    this.name = baseCourse.name + " is Hot and New";
  }
}

module.exports = HotNew;
