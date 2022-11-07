const Tesla = require("./Tesla");
const Autopilot = require("./Autopilot");
const Parktronic = require("./Parktronic");

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getPrice(), tesla.getDescription());
