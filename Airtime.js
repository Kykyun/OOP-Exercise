// Calculate price of television advertisement slot

// Buletin 3000(weekdays) 4000(weekends)
// Slot Akasia 2000(weekdays) 3000(weekends)
// Others 1500(weekdays) 2000(weekends)
// customer can choose day of airtime whether weekdays or weekends and total hours airtime
// discount 20% who subscribed to airtime more than RM20,000 a week

class CalculatePrice {
    constructor(airtime,days,hours){
        this.airtime = airtime,
        this.days = days,
        this.hours = hours
    }

    totalPrice(){
        var price = harga * hours
        return price
    }

    finalPrice(){
        var final = price - (price*discount)
        return final
    }

    display(){
        console.log(`Advertisement = ${advertisement}
        \nWeekend / Weekday = ${days}
        \nHours of AirTime = ${hours}
        \nPrice = ${price}
        \nFinal Price = ${final}`)
    }
}

var airtime = parseInt(prompt(`AirTime: \n1.Buletin\n2.Slot Akasia \n3.Others \nChoose AirTime:`))
var days = parseInt(prompt(`Day of airtime: \n1.Weekdays \n2.Weekends \nChoose your day of airtime:`))
var hours = parseInt(prompt(`Enter total hours of airtime:`))

var calculateprice = new CalculatePrice(this.airtime,this.days,this.hours)

if (airtime == 1){
    advertisement = "Buletin"
    if (days == 1){
        harga = 3000
    }
    else if (days == 2) {
        harga = 4000 
    }
}
else if (airtime == 2){
    advertisement = "Slot Akasia"
    if (days == 1){
        harga = 2000
    }
    else if (days == 2) {
        harga = 3000 
    }
}
else if (airtime == 3){
    advertisement = "Others"
    if (days == 1){
        harga = 1500
    }
    else if (days == 2) {
        harga = 2000 
    }
}
else{console.log("Please enter valid option 1-4")}

price = calculateprice.totalPrice()

var finalprice = new CalculatePrice()

if (price > 20000){
    discount = 0.2
}
else if (price <= 20000){
    discount = 0
}

final = finalprice.finalPrice()
finalprice.display()