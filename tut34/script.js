const changeBackground = () =>{
    document.body.firstElementChild.style.background = "red";
}
a = document.body;
console.log(a.firstChild);
console.log(a.firstElementChild);

changeBackground();