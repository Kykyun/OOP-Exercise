class Hotel{
    constructor(name,location,rating){
        this.name = name,
        this.rating = rating,
        this.location = location
    }  
    //method to display our class, call use "varName.display()"
    display(){console.log(`Hotel name is ${this.name} and location is ${this.location}`)}
}
var hotel1 = new Hotel ("Holiday villa",5,"bangi")
var hotel2 = new Hotel ("Hilton",4.5,"Pj")

hotel1.display()
hotel2.display()

