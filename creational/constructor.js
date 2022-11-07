///// ES5
// It isn't easy to organize inheritance with this approach
var CourseES5 = function (title, author) {
  this.title = title;
  this.author = author;

  // the function will be defined in every object
  this.toString = function () {
    return this.title + "... Author: " + this.author;
  };
};

var courseES5_1 = new CourseES5("JavaScript", "Alex");
var courseES5_2 = new CourseES5("Design Patterns", "Alex");

console.log(courseES5_2.toString());

///// ES6
class Course {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    return console.log(this.title + "... Author:" + this.author);
  }
}

const course = new Course("Typescript", "Alex");
course.toString();
