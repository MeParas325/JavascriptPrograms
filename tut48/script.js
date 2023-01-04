console.log("The is tutorial about event listeners.");

let x = function name(e){
    console.log(e.target);
    console.log(e);
    console.log(e.type, e.clientX, e.clientY);
    alert("Hello world!");
}

let y = function name(e){
    console.log(e.target);
    console.log(e);
    console.log(e.type, e.ClientX, ClientY);
    alert("Hello world2!");
}

btn.addEventListener('click', x);
btn.addEventListener('click', y);

let a = prompt("Which function you don not want to run?");
if(a == "x") btn.removeEventListener('click', x);
else if(a == "y") btn.removeEventListener('click', y);