//create class for property
class Shape{
    constructor(type){
        this.type = type
    }
    display(){
        console.log(`This shape is ${this.type}`)
    }
}

var type = prompt("please enter type of shape:")
var shape1 = new Shape(this.type)
shape1.display()

//create class ractangle extends shape with properties lenght, widht
//thats recieve value form user
//create method calculateArea(),calculateVolume() and display in method display like this;
//"this shape is XX , has lenght: XX and widht: XX with area:xx and volume: XX"

class Rectangle extends Shape{
    constructor(type,lenght,width){
        super(type)
        this.lenght = lenght
        this.width = width
    }

    calculateArea(){
        var Carea = this.lenght * this.width
        return Carea

    }
    
    calculateVolume(){
        return area * this.lenght  //in here we can see the methode area in line 27 reused again
        
    }

    display(){
        console.log(`this shape is ${this.type} , 
        has lenght ${this.lenght} and widht ${this.width} with area ${Carea}
        and volume: XX`)

    }

}

var type = prompt("Enter type:")
var type = prompt("Enter type:")
var type = prompt("Enter type:")
var rectangle1 = new Rectangle(this.type,this.lenght,this.globalThis.widh)

area = rectangle1.calculateArea() //call method calculateArea
volume= rectangle1
