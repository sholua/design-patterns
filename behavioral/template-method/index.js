const TeslaBuilder = require("./TeslaBuilder");
const BmwBuilder = require("./BmwBuilder");

const testlaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

testlaBuilder.build();
console.log('////////');
bmwBuilder.build();
