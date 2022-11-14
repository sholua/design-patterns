const exportVisitor = require('./exportVisitor');
const Tesla = require('./Tesla');
const Bmw = require('./Bmw');

const tesla = new Tesla();
const bmw = new Bmw();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);