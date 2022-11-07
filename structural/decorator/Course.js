class Course {
  constructor({ name, sales, isFree, price, isCampain }) {
    this.name = name;
    this.sales = sales || 0;
    this.isFree = isFree;
    this.price = price || 0;
    this.isCampain = isCampain;
  }

  toString(course) {
    return console.log(JSON.stringify(course));
  }
}

module.exports = Course;
