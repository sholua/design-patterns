const CourseBuilder = require("./CourseBuilder");
const HotNew = require("./HotNew");
const BestSeller = require("./BestSeller");

const course_1 = new CourseBuilder("Design Patterns 1")
  .makePaid(100)
  .makeCampain()
  .build();

const HotNew_1 = new HotNew(course_1);
const BestSeller_1 = new BestSeller(HotNew_1);

course_1.toString(course_1);
course_1.toString(HotNew_1);
course_1.toString(BestSeller_1);
