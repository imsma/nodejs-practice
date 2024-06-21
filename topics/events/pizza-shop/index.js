const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("newOrder", (order) => {
  console.log(".".repeat(80), "\r\n");
  console.log(`New order: ${JSON.stringify(order)}`);
  drinkMachine.serveDrink(order.size);
  console.log("\r\n");
  console.log(".".repeat(80), "\r\n");
});

pizzaShop.orderPizza("large", ["cheese", "pepperoni"]);
pizzaShop.orderPizza("medium", ["cheese"]);
pizzaShop.orderPizza("x-lrge", ["cheese", "pepperoni", "mushrooms"]);
