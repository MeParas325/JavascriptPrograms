const person = {
    name: "Paras",
    role: "Developer",
    age: 20,
    show: function(){
        let that = this;
        setTimeout(function(){
            console.log("Name is: " + that.name + ", Role is: " + that.role);
        }, 4000);
    }
}

person.show();