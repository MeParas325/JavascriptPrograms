const loadScript = (src) =>{

    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.body.append(script); 

        script.onload = () =>{
            resolve("Script loaded successfully sir");
        }
        script.onerror = () =>{
            reject(0);
        }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
p1.then((value)=>{
    console.log(value);
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
}).then((value)=>{
    console.log(value);
    console.log("Second script is ready");
}).catch((error)=>{
    console.log(error);
    console.log("We are having problem on loading your script so sorry for causing you trouble.");

})