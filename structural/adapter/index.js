const Auto = require('./Auto');
const Engine2 = require('./Engine2');
const EngineV8 = require('./EngineV8');
const EngineV8Adapter = require('./EngineV8Adapter');

const myCar = new Auto();
const oldEngine = new Engine2();
myCar.startEngine(oldEngine);

const engineAdapter = new EngineV8Adapter(new EngineV8());
myCar.startEngine(engineAdapter);

const newEngine = new EngineV8();
myCar.startEngine(newEngine);     // Error without adapter