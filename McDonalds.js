// calculate salary of McDonalds
// position | basic | commission
// Manager | rm2500 | rm10
// Counter | rm1500 | rm20
// Kitchen | rm1200 | rm30
// Delivery | rm1100 | rm20
// SOCSO 10% from basic salary
// Salary = basic + (hours x commission) - socso

class SalaryCalculate {
    constructor(position,hours){
        this.position = position,
        this.hours = hours
    }

    staffSalary(){
        var salary = basic + (hours*commission)
        return salary
    }
    
    staffNetSalary(){
        var netSalary = salary - (salary*0.10)
        return netSalary
    }

    display(){
        console.log(`Staff Position = ${level} 
        \nBasic = ${basic} 
        \nCommission = ${commission} 
        \nHours = ${hours}
        \nSOCSO Deduction = ${salary - netSalary}
        \nNet Salary = ${netSalary}`)
    }
}

var position = parseInt(prompt(`Position: \n1.Manager\n2.Counter\n3.Kitchen\n4.Delivery \nEnter Position:`))
var hours = parseInt(prompt(`Enter your work hours:`))

var salarycalculate = new SalaryCalculate(this.position,this.hours)

if (position==1){
    level = "Manager"
    basic = 2500
    commission = 10
}

else if (position==2){
    level = "Counter"
    basic = 1500
    commission = 20
}

else if (position==3){
    level = "Kitchen"
    basic = 1200
    commission = 30
}

else if (position==4){
    level = "Delivery"
    basic = 1100
    commission = 20
}

else {console.log("Please enter valid option 1-4")}

salary = salarycalculate.staffSalary() //method call object.methodname()
netSalary = salarycalculate.staffNetSalary()
salarycalculate.display()