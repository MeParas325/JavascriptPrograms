class Student{
    constructor(name2, rollNo){
        this.name2 = name2;
        this.rollNo = rollNo;
    }

    details(){
        console.log(`Name is: ${this.name2} & RollNo is: ${this.rollNo}`);

    }
}

let Paras = new Student("Paras", 3433);
Paras.details();