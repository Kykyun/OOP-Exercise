//create program that receives input of starting odometer
//and end odometer reading from user. program then calculate
//total mileage travelled

class MileageTravel{
    constructor(start,end){
        this.start = start,
        this.end = end
    }

    calculate(){
        var mileage = this.end - this.start
        return mileage
    }

    display(){
        console.log(`Start odo is ${start}, end odo is ${end}, mileage travelled is ${mileage}`)
    }
}

var start = prompt("Enter your car start meter:")
var end = prompt("Enter your car stop meter:")
var mileagetravel = new MileageTravel(this.start,this.end)

mileage = mileagetravel.calculate()
mileagetravel.display()