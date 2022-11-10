const { Course, CourseServicesFacade } = require("./Course");

const myCourse = new Course({
  name: "Design Patterns",
  project: "Programming",
});

console.log(myCourse);

CourseServicesFacade.complete(myCourse);

console.log(myCourse);
