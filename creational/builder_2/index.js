const CarBuilder = require("./CarBuilder");

const myCar1 = new CarBuilder().addAutoPilot(true).build();
const myCar2 = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .addSignaling(true)
  .updateEngine("V8")
  .build();

console.log(myCar1);
console.log(myCar2);
