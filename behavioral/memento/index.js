const Caretaker = require("./Caretaker");
const creator = require("./creator");

const careTaker = new Caretaker();

careTaker.addMemento(creator.save("hello"));
careTaker.addMemento(creator.save("hello world"));
careTaker.addMemento(creator.save("hello world !!!"));

console.log(creator.restore(careTaker.getMemento(1)));
