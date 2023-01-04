const person = {
    name: "Paras",
    role: "Developer",
    age: 20,
    show: function(){
        console.log(this.name);

    }
}

person.show();