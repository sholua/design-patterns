const Conveyor = require('./Conveyor');
const ConveyorFacad = require('./–°onveyorFacade');

const conveyor = new ConveyorFacad(new Conveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();