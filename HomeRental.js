class HomeService {
    constructor(customerName, yearOfBirth) {
    this.customerName = customerName;
    this.yearOfBirth = yearOfBirth;
    }

    calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
    }

    display() {
    console.log(`Customer Name: ${this.customerName}`);
    console.log(`Age: ${this.calculateAge()}`);
    }
}

class HomeStay extends HomeService {
    constructor(customerName, yearOfBirth, numOfDays, pricePerDay) {
    super(customerName, yearOfBirth);
    this.numOfDays = numOfDays;
    this.pricePerDay = pricePerDay;
    }

    calculateAge() {
    return `${super.calculateAge()} (Home Stay)`;
    }

    calTotalPrice() {
      return this.numOfDays * this.pricePerDay;
    }
}

class HomeRenting extends HomeService {
    constructor(customerName, yearOfBirth, numOfMonths, pricePerMonth) {
    super(customerName, yearOfBirth);
    this.numOfMonths = numOfMonths;
    this.pricePerMonth = pricePerMonth;
    }

    calculateAge() {
    return `${super.calculateAge()} (Home Renting)`;
    }

    calTotalPrice() {
      return this.numOfMonths * this.pricePerMonth;
    }
}
console.log("\nHome Renting Details:");
console.log("=====================");
HomeRenting.display();
console.log(`Total Price: $${totalPrice}`);


const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;

let discount = 0;
if (age >= 60) {
  discount = totalPrice * 0.3;
console.log(`Discount (30%): $${discount}`);
totalPrice -= discount;
}

console.log(`Total after discount: $${totalPrice}`);

let continueOrNot = readline.question("\nDo you want to continue (yes/no)? ");
if (continueOrNot === "no") {
console.log(`\nTotal after discount: $${totalPrice}`);
}
