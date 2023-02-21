// objectName.MethodName()
//name = person.methodName()
var user = {
    firstName: "khaidir",
    lastName: "nurdin",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName())

