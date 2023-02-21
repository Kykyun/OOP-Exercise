const prompt = require("prompt-sync")();

class TailorOrder{
    constructor(custNo,custName,date){
        this.custName=custName,
        this.custNo=custNo,
        this.date=date
    }
    
}

class Uniform extends TailorOrder{
    constructor(custNo,custName,date,uniformType,isCotton,qty){
        super(custNo,custName,date)
        this.uniformType=uniformType,
        this.isCotton=isCotton,
        this.qty=qty
    }
    calcCharges(){
        var total= price* this.qty
        return total
        
    }
    discount(){
        var discount =totaloverall * 0.05
        return discount
    }
    display(){
        console.log("Customer No:"+this.custNo)
        console.log("Customer Name:"+this.custName)
        console.log("Date:"+this.date)
        console.log("Item:"+item)
        console.log("Type:"+type)
        console.log("Price:"+price)
        console.log("Qty:"+this.qty)
        console.log("Total Rpice:"+total)
    }
}
class Tudung extends TailorOrder{
    constructor(custNo,custName,date,tudungColor,type,qty){
        super(custNo,custName,date)
        this.tudungColor=this.tudungColor,
        this.type=this.type,
        this.qty=qty
    }
    calcCharges(){
        var total= price* this.qty
        return total
    }

    discount(){
        var discount =totaloverall * 0.05
        return discount
    }
    display(){
        console.log("Customer No:"+this.custNo)
        console.log("Customer Name:"+this.custName)
        console.log("Date:"+this.date)
        console.log("Item:"+item)
        console.log("Color:"+color)
        console.log("Price:"+price)
        console.log("Qty:"+this.qty)
        console.log("Total Rpice:"+total)
    }
}
totaloverall=0
do{
custNo= prompt("Enter Customer No:")
custName= prompt("Enter Customer Name:")
date= prompt("Enter date :")
qty=parseInt(prompt("Enter quantity:"))
option = parseInt(prompt("Enter option(1.Uniform|2.Tudung) :"))

if (option== 1){
    uniformType =prompt("Enter 1.Office 2.School:")
    if(uniformType==1){
        isCotton=prompt("Enter Cotton(Y/N:")
        if (isCotton=="Y"){
            price=100
            item="Office Uniform"
            type="Cotton"}
        else if(isCotton=="N"){
            price=60
            item="Office Uniform"
            type="Non Cotton"}
        }
    else if(uniformType==2){
        isCotton=prompt("Enter Cotton(Y/N:")
        if (isCotton=="Y"){
            price=80
            item="School Uniform"
            type="Cotton"}
        else if(isCotton=="N"){
            price=40
            item="School Uniform"
            type="Non Cotton"}
        }
        var uniform= new Uniform(custName,custNo,date,uniformType,isCotton,qty)
        var total=uniform.calcCharges()
        uniform.display()}
    else if (option==2){
        type=prompt("Enter type(1.Sarung2.Dua LApis:")
        if (type==1){
            tudungColor=prompt("Enter color 1.OffWhite 2.White")
            if (tudungColor==1){
            price=10
            item="Tudung Sarung"
            color="Off White"}
            else if(tudungColor==2){
            price=12
            item="Tudung Sarung"
            color="White"}}
        
        else if (type==2){
            tudungColor=prompt("Enter color 1.OffWhite 2.White")
            if (tudungColor==1){
            price=15
            item="Tudung Dua lapis"
            color="Off White"}
            else if(tudungColor==2){
            price=16
            item="Tudung Dua lapis"
            color="White"}
        }
        var tudung= new Tudung(custNo,custName,date,tudungColor,type,qty)
        var total=tudung.calcCharges()
        tudung.display()}

        totaloverall=totaloverall+total

        var cont=prompt("Continue Purchase?:(yes|no)")
    }while (cont=='yes')

    var membership=prompt("KedaiUniform Member?(yes|no)")
    if(membership=='yes'){
        if (option==1){
        discount=uniform.discount()} //*
        else if(option==2){
        discount=tudung.discount()} //*
        
        console.log("Discount:"+discount)}
        
    else if(membership=='no'){
        discount=0
        console.log("Discount:"+discount)
        }
    
console.log("Nett Total: "+(totaloverall - discount))
console.log("Thank you for purchasing with KedaiUniform")