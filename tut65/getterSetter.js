class Animal{
    constructor(name){
        this._name = name;
        
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

}


let cat = new Animal("billy");
console.log(cat.name);
cat.name = "baagh";
console.log(cat.name);