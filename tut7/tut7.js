console.log("We are here in arrays");
let marks = [2, 5, 4, 6, 3, 5];
let fruits = ["Orange", "Apple", "Strawberry"];
let str = [2, "3", [4, 5], ["Apple", "Banana"]];
let arr = new Array("Papaya", "3", 3)
console.log(marks);
// console.log(fruits);
// console.log(str);
// console.log(arr);

// console.log(arr.length);
// console.log(marks.length);
// console.log(Array.isArray("ksjaf"));
// arr[0] = "Paras";
// let arrelement = arr[2];
// console.log("Element:", arrelement);
// console.log(arr);

// let val = marks.indexOf(2);
// console.log(val);

// marks.push(874);
// marks.unshift(3);
// marks.pop();
// marks.unshift(34);
// marks.splice(1, 4);
// marks.reverse();
let marks2 = [3, 6, 77, 2];
marks = marks.concat(marks2);
console.log(marks);

let myobj ={
    "first name": "Paras",
     village: "Bhakura",
     isactive: true,
     marks: [2, 5, 3, 3, "4"]
}
console.log(myobj);
console.log(myobj["first name"]);
console.log(myobj.isactive);
console.log(myobj.village);
console.log(myobj["village"]);


