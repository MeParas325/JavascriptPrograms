let a = document.getElementsByClassName('container')[0];
let b = a.firstElementChild;
a.firstElementChild.addEventListener('click', function handleClick() {
    a.firstElementChild.textContent = "Hello";

});