const Engine = require("./Engine");
const OnStartCommand = require("./OnStartCommand");
const Driver = require("./Driver");

const engine = new Engine();
console.log(engine);

const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();
console.log(engine);
