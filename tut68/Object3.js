const person = {
    name: "Paras",
    role: "Developer",
    age: 20,
    show: function(){
        console.log(this);
        setTimeout(function(){
            console.log(this);
            console.log("Name is: " + this.name + "role is: " + this.role);
        }, 4000);
    }
}

person.show();