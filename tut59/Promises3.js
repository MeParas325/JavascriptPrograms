let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Value 1");
    }, 2000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Value 2");
    }, 1000);
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
})

// let promise_all = Promise.all([p1, p2, p3]);
// let promise_all = Promise.allSettled([p1, p2, p3]);
// let promise_all = Promise.race([p1, p2, p3]);
// let promise_all = Promise.resolve(4);
let promise_all = Promise.reject(4);

promise_all.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})