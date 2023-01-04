console.log("Welcome guys");

//Single element selector
let element = document.getElementById("MyFirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerText = "Paras is a good boy"
element.innerHTML = "<h1>Paras is a good boy</h>"
// console.log(element.innerHTML);
// console.log(element.innerText);



let sel = document.querySelector("#MyFirst");
sel = document.querySelector(".child");
sel = document.querySelector("div");
sel.style.color = "green";
// console.log(sel);




// Multiple Element selector
let ele = document.getElementsByClassName("child");
console.log(ele[0].getElementsByClassName("child"));
ele = document.getElementsByTagName("div");
console.log(ele);

Array.from(ele).forEach(element => {
    console.log(ele);
    element.style.color = "blue";
});