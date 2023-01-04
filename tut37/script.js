const arr = ["Paras", "Tanuja", "Satish", "Himu", "Riya"];

let a = Math.floor(Math.random() * arr.length);

document.body.firstElementChild.innerHTML = "<h1>"+arr[a]+"</h1>";
