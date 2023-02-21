//create program that receives input of starting odometer and
//odometer reading from user. program then calculates total
//mileage travelled. class name MileageTravel display "start odo is xx, end odo is:;mileage travelled is;"
//METHOD calculateMileage():to calculate mileage travelled

//Create class gas extends MileageTravel
//calculate total cost for petrol given price per liter is rm2
//in method kiraPetrol()
//and consumption for petrol is estimated at 1 liter/per 1 km
//display result:("total petrol cost for km travelled xx is RMxx")

class MileageTravel{
    constructor(start,end){
        this.start = start,
        this.end = end
    }

    calculateMilleage(){
        var mileage = this.end - this.start
        return mileage
    }

    display(){
        console.log(`Start odo is ${start}, end odo is ${end}, mileage travelled is ${mileage}`)
    }
}
//odometer
var start = prompt("Enter your car start meter:")
var end = prompt("Enter your car stop meter:")


var mileagetravel = new MileageTravel(this.start,this.end)
var mileage = mileagetravel.calculateMilleage()
mileagetravel.display()

class GasPetrol extends MileageTravel{
    constructor(start,end){
        super(start,end)
    }
    
    kiraPetrol(){
        var payGas = mileage * 1 * 2
        return payGas
    }
    display(){
        console.log(`total petrol cost for ${mileage} km is RM${payGas}`)
    }
}


//gas petrol
var gaspetrol = new GasPetrol(start,end)
payGas = gaspetrol.kiraPetrol()
gaspetrol.display()

//petrol station is offering free milo ais for customer paying
//more than rm20. display wheter custmer is eligible for milo ais
//or not eligible. display "Free milo ais " if eligible, else 
//"No free milo ais"
if(payGas > 20){
    console.log("Free milo ais")
else{
    onsole.log("no milo")
}
}