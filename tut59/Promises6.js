async function tanuja(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27deg");
        }, 2000);
    })
    
    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("35deg");
        }, 5000);
    })
    
    console.log("Fetching delhi weather...");
    let delhiw = await delhiWeather;
    console.log("Fetched delhi weather is:"+delhiw);
    console.log("Fetching bangalore weather...");
    let bangalorew = await bangaloreWeather;
    console.log("Fetched bangalore weather is:"+bangalorew);

}

tanuja();
