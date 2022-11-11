const Master = require("./Master");
const Paypal = require("./Paypal");
const Qiwi = require("./Qiwi");

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal);
paypal.setNext(qiwi);

master.pay(400);
