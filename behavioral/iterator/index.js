const ArrayIterator = require("./ArrayIterator");
const ObjectIterator = require("./ObjectIterator");

const collection1 = new ArrayIterator(['Audi', 'Tesla']);
const collection2 = new ObjectIterator({
  audi: { name: 'Audi', color: 'white' },
  tesla: { name: 'Tesla', color: 'black' }
});

while(collection1.hasNext()) {
  console.log(collection1.next())
}

while(collection2.hasNext()) {
  console.log(collection2.next())
}