const Course = require("./Course");

const course = new Course({
  id: "001",
  title: "Design Patterns",
  author: "Alex",
});
course.DbRequest();
