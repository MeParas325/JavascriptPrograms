// type conversion and type coercion
console.log("This is js");

// let a = 45;
let a = String(45);
console.log(a, (typeof a));

// let boolvar = true;
let boolvar = String(true);
console.log(boolvar, (typeof boolvar))

// let date = new Date();
let date = String(new Date());
console.log(date, (typeof date));

// let arr = [1, 2, 3, 4, 5, 6];
// let arr = String([1, 2, 3, 4, 5, 6]);
// console.log(arr.length, (typeof arr));
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length, (typeof arr));

// let s = 45;
// console.log(s.toString());
// let s = true;
// console.log(s.toString());
// let s = new Date();
// console.log(s.toString());

let str = Number("345");
str = Number("3d45");
str = Number(true);
str = Number(false);
str = Number([1, 23, 4, 5, 7, 8]);
console.log(str, (typeof str));

// let number = parseInt("55.89466569");
let number = parseFloat("5.5436");
console.log(number.toFixed(7), (typeof number));

let mystr = Number("453");
let myno = 45;
console.log(mystr + myno);