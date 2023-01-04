let element = document.createElement("h1");
let text = document.createTextNode("This is me paras");
element.appendChild(text);

console.log(element);
let web = document.createElement("a");
web.href="//codewithharry.com"
console.log(web);
web.appendChild(element);
console.log(web);

let elem2 = document.getElementById("heading");
elem2.replaceWith(web, document.getElementById("heading"));




