class Bill {
    constructor(subscription,hours){
        this.subscription = subscription,
        this.hours = hours
    }

    kiraBill(){
        var total = price + charge
        return total
    }

    display(){
        console.log(`Package = ${subscription} 
        \nHours = ${hours}
        \nBill monthly = RM${price}
        \nAdditional charge = RM${charge}
        \nTotal charges = RM${total}`)
    }
}

var subscription = prompt('Package = A,B,C,D\nChoose your package :')
var hours = parseInt(prompt('Number of hours that were used :'))

var bill = new Bill(this.subscription,this.hours)

if (subscription="A"){
    price = 10.00
    if (hours <= 10){
        charge = 0
    }
    else if (hours > 10){
        charge = 2.00 * (hours - 10)
    }
}
else if (subscription="B"){
    price = 20.00
    if (hours <= 20){
        charge = 0
    }
    else if (hours > 20){
        charge = 1.50 * (hours - 20)
    }
}
else if (subscription="C"){
    price = 30.00
    if (hours <= 30){
        charge = 0
    }
    else if (hours > 30){
        charge = 1.00 * (hours - 30)
    }
}
else if (subscription="D"){
    price = 50.00
    if (hours <= 50){
        charge = 0
    }
    else if (hours > 50){
        charge = 0.50 * (hours - 50)
    }
}
else {console.log("Enter a valid value A/B/C/D")}

total = bill.kiraBill()
bill.display()