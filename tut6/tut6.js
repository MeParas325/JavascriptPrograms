const name = "Paras";
const greeting = "Good morning"
// console.log(greeting + " " + name);

let html;
html = "<h1>This is heading</h1>" +
       "<p>This is paragraph</p>";

html = html.concat("This", " Str");
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[10]);
// console.log(html.indexOf("is"));
// console.log(html.lastIndexOf(">"));
// console.log(html.charAt(6));
// console.log(html.endsWith("Str"));
// console.log(html.endsWith("St"));
// console.log(html.includes(" "));
// console.log(html.substring(0, 5));
// console.log(html.slice(0, 5));
// console.log(html.split(" "))
// console.log(html.split(">"))
// console.log(html.replace("This", "it"))

let fruit1 = "Orange";
let fruit2 = "Strawberry";
let myhtml = `Hello ${name}
              <h1>This is my heading</h1>
              <p>Tanuja like ${fruit1} and ${fruit2}</p>
              `;

document.body.innerHTML = myhtml;


