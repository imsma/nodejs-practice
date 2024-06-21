class DrinkMachine {
  constructor() {
    this.drinks = ["Coke", "Pepsi", "Sprite"];
  }

  getDrinks() {
    return this.drinks;
  }

  addDrink(drink) {
    this.drinks.push(drink);
  }

  serveDrink(size) {
    if (size === "large") {
      console.log("Serving large drink...");
    }
  }
}

module.exports = DrinkMachine;
