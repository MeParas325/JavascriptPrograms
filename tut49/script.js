//Synchronous programming
// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// let favColor = prompt("What is your favorite color?");
// console.log(name+" is "+ age + " years old and his favorite color is "+ favColor);


//Assynchronous programming
// console.log("Start");
// setTimeout(function name(){
//     console.log("I am the setTimeout function.");
// }, 3000);
// console.log("End");

function loadScript(url, scriptLoaded){
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    script.onload = function (){
        scriptLoaded(url);
    }
}

function scriptLoaded(url){
    console.log("Script is loaded. "+url);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", scriptLoaded);

