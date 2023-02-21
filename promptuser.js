class Shape{
    constructor(type, lenght,width){
        this.type=type,
        this.lenght=lenght,
        this.width=width
    }

    display(){
        console.log(`this shape is ${this.type} with lenght ${this.lenght} and widht ${this.width}`)    }
}

var shape1 = new Shape("Rectangle",10,5)
shape1.display()

var type = prompt("enter type:")
var lenght = prompt("enter lenght:")
var width = prompt("enter width:")

var shape2 = new Shape (this.type,this.lenght,this.widht)
shape2.display()