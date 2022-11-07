var Course = function (title, author) {
  this.title = title;
  this.author = author;
};

Course.prototype.toString = function (arguments) {
  console.log(this.title + "... Author: " + this.author);
};

var course_1 = new Course("JavaScript", "Alex");
var course_2 = new Course("Design Patterns", "Alex");

course_1.toString();
course_2.toString();
