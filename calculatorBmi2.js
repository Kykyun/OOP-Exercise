// create a program that displays BMI status based on bmi level
// example: "Your BMI is 25 and your BMI status is NORMAL"
// Exercise no.1

class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    
    display(){
        console.log(`I am ${this.name}, and I'm ${this.age} years old.`)
    }
}

class Health extends Person {
    constructor(name, age, weight, height){
        super(name, age),
        this.weight = weight,
        this.height = height
    }

    calculateBMI(){
        return this.weight / (this.height * this.height);   
    }

    determineCategory(){
        let bmi = this.calculateBMI
        if(bmi > 17) {
            return "UNDERWEIGHT"
        } else if(bmi > 18 && bmi < 22) {
            return "NORMAL"
        } else {
            return "OVERWEIGHT"
        }

    }

    display(){
        super.display(),
        console.log(` My BMI is ${this.calculateBMI()}, my BMI category is ${this.determineCategory()}`)
    }
}

let Person = new Person("Syakirin", 20)

let Health = new Health("Syakirin", 20, 70, 1.67)