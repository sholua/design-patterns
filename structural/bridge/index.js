const Bmw = require("./Bmw");
const BlackColor = require("./BlackColor");

const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());
