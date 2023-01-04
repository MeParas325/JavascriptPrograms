let x = document.getElementsByTagName('span')[0];
console.log(x);
console.dir(x);

let y = document.getElementsByTagName('span')[1];
console.log(y);
console.dir(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(first.innerHTML);
console.log(first.outerHTML);

first.innerHTML = "<b>I am bold</b>"
console.log(first.innerHTML);
console.log(first.innerText);

console.log(first.outerHTML);
first.outerHTML = "<div>I am div</div>"

// These two lines will not work because we change the outer html so the element which id is first is not exist
// console.log(first.outerHTML);
// console.log(first.innerHTML);