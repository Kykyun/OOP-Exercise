const prompt = require("prompt-sync")();

// Define a parent class for Bakery
class Bakery {
constructor(customername, membership) {
    this.customername = customername;
    this.membership = membership;
}
}

// Define a child class for OrderCake that extends Bakery
class OrderCake extends Bakery {
constructor(size, flavor, qty, customername, membership) {
    // Call the constructor of the parent class
    super(customername, membership);
    this.size = size;
    this.flavor = flavor;
    this.qty = qty;
}

  // Calculate the total price of the cake based on its size and flavor
calTotalPrice() {
    let price;
    if (this.flavor === 1) {
    this.flavor = "Choc Indulgence";
    if (this.size === 30) {
        price = 40;
    } else if (this.size === 50) {
        price = 60;
    }
    } else if (this.flavor === 2) {
    this.flavor = "Red Velvet";
    if (this.size === 30) {
        price = 50;
    } else if (this.size === 50) {
        price = 70;
    }
    }
    return price * this.qty;
}

  // Display the cake information
displayInfo() {
    console.log(`Cake Type: ${this.flavor}, Quantity: ${this.qty}, Total: ${this.calTotalPrice()}`);
}
}

// Define a child class for BuyPastries that extends Bakery
class BuyPastries extends Bakery {
constructor(type, qty, customername, membership) {
    // Call the constructor of the parent class
    super(customername, membership);
    this.type = type;
    this.qty = qty;
}

  // Calculate the total price of the pastries based on their type
calTotalPrice() {
    let price;
    if (this.type === 1) {
    this.type = "Croissant";
    price = 15;
    } else if (this.type === 2) {
    this.type = "Creampuff";
    price = 25;
    } else if (this.type === 3) {
    this.type = "Japanese Creampuff";
    price = 35;
    }
    return price * this.qty;
}

  // Display the pastry information
displayInfo() {
    console.log(`Pastry Type: ${this.type}, Quantity: ${this.qty}, Total: ${this.calTotalPrice()}`);
}
}

// Prompt the user for input
const customername = prompt("Enter name: ");
const membership = prompt("Enter membership (yes|no): ");
const option = prompt("Enter option (1. cakes | 2. pastries): ");

// Handle the user input based on the selected option
if (option === "1") {
const flavor = prompt("Enter cake flavor (1. Choc Indulgence | 2. Red Velvet): ");
const size = prompt("Enter cake size: ");
const qty = prompt("Enter quantity: ");
const ordercake = new OrderCake(size, flavor, qty, customername, membership);
ordercake.displayInfo();
} else if (option === "2") {
const type = prompt("Enter pastry type (1. Croissant | 2. Creampuff | 3. Japanese Creampuff): ");
const qty = prompt("Enter quantity: ");
const buypastries = new BuyPastries(type, qty, customername, membership);
buypastries.displayInfo()
