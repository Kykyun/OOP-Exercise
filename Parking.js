class Parking{
    constructor(category,hours){
        this.category = category,
        this.hours = hours
    }

    kiraParking(){
        var total = charge + extracharge
        return total 
    }
    
    kiraDiscount(){
        var final = total - (discount * total)
        return final
    }

    display(){
        console.log(`1. Standard  | 2. Premium  |  3. Valet  
        \nParking Category = ${category}
        \nHours = ${hours}
        \nCharges = ${total} 
        \nAirAsia Big Member = ${member}
        \nCharges after discount = ${final}`)
    }
}

var category = parseInt(prompt('1. Standard  | 2. Premium  |  3. Valet  \nParking Category :'))
var hours = parseInt(prompt('Enter hours :'))

var parking = new Parking(this.category,this.hours)

if (category==1){
    if (hours <= 5){
        charge = 2.50 * hours
        extracharge = 0
    }
    else if (hours >= 6){
        charge = 2.50 * 5
        extracharge = 1.50 * (hours-5)
    }
}
else if (category==2){
    if (hours <= 5){
        charge = 4.50 * hours
        extracharge = 0
    }
    else if (hours >= 6){
        charge = 4.50 * 5
        extracharge = 1.00 * (hours-5)
    }
}
else if (category==3){
    if (hours <= 5){
        charge = 15.00 * hours
        extracharge = 0
    }
    else if (hours >= 6){
        charge = 15.00 * 5
        extracharge = 5.00 * (hours-5)
    }
}
else {console.log("Please enter valid number 1-3")}

total = parking.kiraParking()

var member = prompt('AirAsia Big member? yes or no?')

if (member='yes'){
    discount = 0.1
}
else if (member='no'){
    discount = 0
}
else {console.log("Please enter valid answer. yes/no")}

final = parking.kiraDiscount()
parking.display()