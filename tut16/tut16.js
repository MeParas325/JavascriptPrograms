console.log("Welcome to tut16");

let element = document.createElement("li");
let text = document.createTextNode("This is created by me");
element.appendChild(text);

//Adding classname and id name on li
element.className = "childul";
element.id = "myid";
element.setAttribute("title", "mytitle");
// element.innerText = "This is created by me"
// element.innerHTML = "<b>This is created by me</b>"

let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);

let element1 = document.createElement("li");
let node = document.createTextNode("This is the replacement of element");
element1.appendChild(node);
console.log(element1);
element.replaceWith(element1);

let ids = document.getElementById("myids");
ids.replaceChild(element, document.getElementById("myid"));
ids.removeChild(document.getElementById("lui"));
console.log(element);

let pr = element.getAttribute("id");
pr = element.getAttribute("class");
pr = element.hasAttribute("class");
console.log(element);
let ptr = element.removeAttribute("id");
console.log(element, pr);
