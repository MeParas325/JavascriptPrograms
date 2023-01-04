console.log("This is Promises tutorial");

let promise = new Promise((resolve, reject) => {
    alert("I am alert inside the promise");
    resolve(34);
    reject(34);
})

console.log("Hello one");

setTimeout(function(){
    console.log("Hello 2 after 2 seconds");
},2000);

console.log("Hello 3");
console.log(promise);