//create an empty array to store all contact info
var contacts = [];
function addContact(){
    var name = document.getElementById("name_input").value;
    var phone = document.getElementById("phone_input").value;
    var email = document.getElementById("email_input").value;

    //create object using object literal
    var newContact = {
        name:name,
        phone:phone,
        email:email,
    }

    contacts.push(newContact);
    //kosongkan balik text input
    var name = document.getElementById("name_input").value="";
    var phone = document.getElementById("phone_input").value="";
    var email = document.getElementById("email_input").value="";

    console.log(contacts)
    //save dalam localstorage
    localStorage.setItem("contacts",JSON.stringify(contacts))
    renderUI()
}

function renderUI(){
    //empty list kalau sebelumni ada benda
    document.getElementById("list").innerHTML="";

    //iterate our array of objects
    for (var i=0 ; i<contacts.length; i++){
        var newLi = document.createElement("li");

        //get object in array
        var currentContact = contacts[i];

        //assign property in newLI
        newLi.innerHTML=`name: ${currentContact.name},
        phone: ${currentContact.phone},
        email: ${currentContact.email}`//guna tidle sign

        //add it to ul
        document.getElementById("list").appendChild(newLi);
    }
}