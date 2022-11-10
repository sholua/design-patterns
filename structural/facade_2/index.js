const Conveyor = require('./Conveyor');
const ConveyorFacad = require('./СonveyorFacade');

const conveyor = new ConveyorFacad(new Conveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();