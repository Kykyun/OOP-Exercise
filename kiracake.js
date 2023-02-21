const prompt = require("prompt-sync")();//only to run in vs terminal
class Cake{
    constructor(type,topping){
        this.type=type,
        this.topping=topping
    }

    toString(){
        return cake +" cake with "+ topping+" topping \n is RM"+ price 
    }  }

class OrderCake extends Cake{
    constructor(type,topping,quantity){
        super(type,topping),
        this.quantity=quantity
    }
calculatePrice(){
    var total=quantity* price
    return total
}
}
var count=0
var totalall=0
do{
var type= prompt(`1.Cheese Cake \n 2. Chocolate Cake \n 3. Red Velvet Cake\n Enter Cake type:`)
var topping=prompt("Topping: ")
var quantity=parseInt(prompt("Quantity: "))

var ordercake1 = new OrderCake (type,topping,quantity)

if (type=="1"){
  var   price=10
  var cake="Cheese cake" 
}
else if (type=="2"){
    var price =11
    var cake="Chocolate cake"   
}
else if (type=="3"){
    var price=12
    var cake="Red velvet"   
}
else {"Please enter options 1-3"}

total=ordercake1.calculatePrice()// call  method calculatePrice()

console.log("Type of cake:  "+cake)
console.log("Topping:  "+topping)
console.log("Quantity:"+quantity)
console.log("Price:RM"+price)
console.log(ordercake1.toString())//call method from parent class using child class object

var cont=prompt("Do you want to continue purchase?")
var totalall=totalall+total //accumulative total
var count=count+1
 }while (cont=="y");


console.log("The total Price of is "+totalall)
console.log("The total transactions:"+count)