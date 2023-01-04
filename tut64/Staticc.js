class Animal {
    constructor(namee){
        this.namee = Animal.capitalize(namee);
    }

    static capitalize(namee){
        return namee.charAt(0) + namee.substring(1, namee.length);
    }

    showName(){
        console.log("Name of the animal is:"+ this.namee);
    }


}

let cat = new Animal("billy");
cat.showName();
