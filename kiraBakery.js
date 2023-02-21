class Bakery{
    constructor(customerName,contact){
        this.customerName = customerName,
        this.contact = contact
    }
}

class OrderCake extends Bakery{
    constructor(customerName,contact,size,flavour,quantity){
        super(customerName,contact),
        this.size = size,
        this.flavour = flavour,
        this.quantity = quantity
    }

    calTotalPrice(){

    }

    displayInfo(){

    }
}

class BuyPastries extends Bakery{
    constructor(customerName,contact,type,quantity){
        super(customerName,contact),
        this.type = type,
        this.quantity = quantity
    }

    calTotalPrice(){

    }

    displayInfo(){

    }
}

var customerName = prompt("Your Name?")
var contact = prompt("Your Contact?")

var bakery = new Bakery(this.customerName,this.contact)

totaloverall = 0
do{
    var option = prompt(`1. Cake \n2. Pastry \n\nWhat do you want?`)

    if (option=="1"){
        var size = prompt(`Cake Size \n\n1. 30 Inch \n2. 50 inch \n\nWhat cake size do you want?`)
        var flavour = prompt(`Flavour \n\n1. Chocolate Indulgence \n2. Red Velvet \n\nWhat flavour do you want?`)
        var quantity = parseInt(prompt("How many do you want?"))

        if (size=="1"){
            if (flavour=="1"){
                var price = 40
            }
            else if(flavour=="2"){
                var price = 50
            }
        }
        else if (size=="2"){
            if (flavour=="1"){
                var price = 60
            }
            else if (flavour=="2"){
                var price = 70
            }
        }
    }

    else if (option=="2"){
        var type = prompt(`Pastry Type \n\n1. Croissant Set \n2. Creampuff \n3. Japanese Creampuff \n\nChoose your pastry type that you want`)
        var quantity = parseInt(prompt("How many do you want?"))

        if (type=="1"){
            var price = 15
        }
        else if (type=="2"){
            var price = 25
        }
        else if (type==3){
            var price = 35
        }
    }
    totaloverall = totaloverall + totalprice
    var cont = prompt("Do you want to continue add other item? (yes|no)")
}
while (cont=="yes");

var membership = prompt("Do you have membership \1.Yes \n2.No \n\n(1/2")
if (membership=="1"){
    var discount = 0.3 * totaloverall
}
else if (membership=="2"){
    var discount = 0
}

console.log()