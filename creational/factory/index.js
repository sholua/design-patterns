const userFactory = require("./userFactory");

const alex = userFactory("instructor", "Alex", "software engineer", 1000);
const john = userFactory("student", "John", "Beginner");

console.log(alex.toString());
console.log(john.toString());
