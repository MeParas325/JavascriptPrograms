async function weather(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27 deg");
        }, 1000);
    })

    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("45 deg");
        }, 4000);
    })

    delhiWeather.then((value)=>{
        alert(value);
    })

    bangaloreWeather.then((value)=>alert(value))
}

weather();
console.log("Welcome to weather control room.");