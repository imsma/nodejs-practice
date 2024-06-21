const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  orderPizza(size, toppings) {
    this.orderNumber++;
    this.emit("newOrder", {
      orderNumber: this.orderNumber,
      size,
      toppings,
    });
  }

  displayOrderNumber() {
    console.log(`Order number ${this.orderNumber} is placed.`);
  }
}

module.exports = PizzaShop;
