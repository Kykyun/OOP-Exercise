//create class student with properties weight,height with method calculate BMI,which calculate BMI for student.
//formula BMI = weight(kg)Xheight * height(m)

class Student{
    constructor(name,weight, height){
        this.name = name,
        this.weight = weight,
        this.height = height
    }

    calculateBMI() {
        var BMI = parseFloat(this.weight) / (parseFloat(this.height) * parseFloat(this.height))
        return BMI
    }
    display(){
        console.log(`student name is ${this.name} BMI is ${BMI} `)
    }
}

var khaidir = new Student('khaidir',65, 1.7)
BMI = khaidir.calculateBMI()
khaidir.display()