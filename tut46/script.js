console.log("setTimeOut and setInterval");

let a = setTimeout(function(){
    console.log("I am inside the setTimeout.");
}, 4000);
console.log(a);

const sum = (a, b) => {
    console.log("The sum is:"+(a+b));
    a+b;
}

setTimeout(sum, 4000, 4, 6);

let c = 4;
let d = 5;

// setInterval(function(c, d){
//     console.log("Inside setInterval.");
//     console.log("The sum is:"+(c+d));
//     c++;
//     d++;
// }, 3000);

setInterval(sum, 4000, 5, 6);
