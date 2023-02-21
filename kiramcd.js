//program should prompt user if user wish to continue to calculate or not
//system should calculate and display total salary disbursed by company:
//and total number of staff being paid:

const prompt = require("prompt-sync")();// code for running user prompt in terminal but requires extension

class GajiMekdi{
    constructor(position,hours){
        this.position=position
        this.hours=hours
    }

    kiraGaji(){
        var gaji= basic + (hours * commission)
        return gaji
    }
    kiraNettGaji(){
        var nettGaji= gaji-(gaji* 0.10)
        return nettGaji
    }
    display(){
        console.log(`Staff position: ${level}\nBasic:${basic} 
Commission:${commission}\n Hours:${hours} 
SOCSO deduction:${gaji-nettGaji}\nNett Salary:${nettGaji}`)
    }
}
var position = parseInt(prompt(`MENU:\n|1.Manager\n|2.Counter\n|3.Kitchen
|4.Delivery \nEnter position:`))
var hours= parseInt(prompt("Enter OT hours worked:"))

var gajimekdi= new GajiMekdi(this.position, this.hours)

if(position==1){
    basic=2500
    commission=10 
    level="MANAGER"   
}
else if (position==2){
    basic=1500
    commission=20
    level="COUNTER" }

else if (position==3){
    basic=1200
    commission=30 
    level="KITCHEN"}

else if (position==4){
    basic=1100
    commission=20 
    level="DELIVERY"}
else {console.log("Please enter valid option 1-4")}

gaji= gajimekdi.kiraGaji() //method call for return var object.methodname()
nettGaji=gajimekdi.kiraNettGaji()//method call for return var object.methodname()
gajimekdi.display()