class Course {
  constructor(data) {
    this.name = data.name;
    this.project = data.project;
    this.completed = data.completed || false;
  }
}

const CourseServices = (() => {
  return {
    complete: (Course) => {
      Course.completed = true;
      console.log("Completing course: " + Course.name);
    },
    save: (Course) => {
      console.log("Saving course: " + Course.name);
    },
  };
})();

const CourseServicesFacade = (() => {
  const complete = (Course) => {
    CourseServices.complete(Course);
    if (Course.completed) {
      CourseServices.save(Course);
    }
  };

  return {
    complete,
  };
})();

module.exports = { Course, CourseServicesFacade };
