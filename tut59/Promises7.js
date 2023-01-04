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

    return [delhiw, bangalorew];

}

// tanuja().then(function(values){
//     console.log(values);
// })

const paras = async() =>{
    let a = await tanuja();
    console.log(a);
    let b = await main1();
}

paras();

const main1 = async() =>{
    console.log("I am running in the last.");
    
}
