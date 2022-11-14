const Payment = require("./Payment");

const paymentMethod = new Payment();

paymentMethod.showPaymentMethod("Mike");
paymentMethod.showPaymentMethod("Alex");

paymentMethod.changeStrategy("Paypal");

paymentMethod.showPaymentMethod("Julia");
