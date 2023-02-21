//Write a class that has 3 properties:
// type, length, width, and methods kiraArea(), kiraPerimeter().
// Prompt user to enter type of shape,length and width, 
//and then prompt option either to calculate area or perimeter

class Shape{
    constructor(type,length,width){
    this.type=type
    this.length=length
    this.width=width}
    display(){
    console.log(`Type of shape is ${this.type}`)}

    kiraArea(length,width){
        return this.length*this.width
    }
    kiraPerimeter(length){
        return this.length * 4    }
}
//input from user, assign to object
type=prompt("enter type:");

length=parseInt(prompt("enter length:"))

width=parseInt(prompt("enter width:"))

option=prompt("menu: 1)Kira area 2)kira perimeter.Enter option")

shape2 = new Shape (type,length,width)

shape2.display()
if (option==1)
{
    console.log(shape2.kiraArea())
}
else if (option==2)
{console.log(shape2.kiraPerimeter())}