class MobilePlan{
    constructor(planOption,dataUsage,upsizeOption){
        this.planOption = planOption;
        this.dataUsage = dataUsage;
        this.upsizeOption = upsizeOption;
    }

usageCharge(){

}

displayMobileplan(){

}

upsizeCharge(){

}
calculateDiscount(){
    discount = 
}
calculateFinalCharge(){

}
displayUpsizeplan(){
    console.log(upsizeOption)
}
}

var plan = parseInt(prompt(`menu:\n|1.Plan A \n|2.Plan B\n|3.plan C\n\n Choose your plan?:`))

var datausage = parseInt(prompt(`your data usage?:`))

var upsizePlan = parseInt(prompt(`do you want to upgrade?:`))

if(plan == 1){
    chargeUsage = 30 +(exeedingUsage * 5)
}
else if(plan == 2){
    chargeUsage = 60 +(exeedingUsage * 3)
}
else if(plan == 3){
    chargeUsage = 90 +(exeedingUsage * 1)
}

if(upsizePlan == 1){
    console.log(`not Available`)
}
else if(upsizePlan == 2){
    
}
