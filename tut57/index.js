let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("I am the 1 promise which will runs after 2 seconds.");
        resolve(34);
    }, 2000);
})

p1.then((value)=>{
    console.log(value);

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I am the 2 promise  which runs after p1.");
            resolve(45);
        }, 4000);
    })
}).then((value)=>{
    console.log(value);
    
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I am the 3 promise which runs after p2");
        }, 5000);
    })
})