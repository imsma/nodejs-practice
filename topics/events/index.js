const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", (product) => {
  console.log(`Product: ${product} was sold`);
});

myEmitter.on("newSale", (product, quantity) => {
  console.log(`There was a new sale of ${quantity} ${product}`);
});

console.log("Event Emitter sample");

myEmitter.emit("newSale", "T-shirt", 2);
