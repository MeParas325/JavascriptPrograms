console.log("This is 18 tutorial");

// let button = document.getElementById("btn");
// button.addEventListener("click", func);
// button.addEventListener("dblclick", func1);
// button.addEventListener("mousedown", func2);

// function func(e) {
//     // console.log("Bhelkm", e);
//     e.preventDefault();
// }

// function func1(e) {
//     console.log("thanks for your double click", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("This is mousedown", e);
//     e.preventDefault();
// }

// document.querySelector(".no").addEventListener("mouseenter", function () {
//     console.log("You entered your mouse in no");
// })
// document.querySelector(".no").addEventListener("mouseleave", function () {
//     console.log("You leave your mouse form no");
// })
// document.querySelector(".container").addEventListener("mousemove", function () {
//     console.log("You move your mouse inside of the container");
// })
// document.querySelector(".container").addEventListener("mousemove", function (e) {
//     console.log(e.offsetX, e.offsetY);
//     console.log("You move your mouse inside of the container");
// })
document.querySelector(".container").addEventListener("mousemove", function (e) {
    console.log(e.offsetX, e.offsetY);
    console.log("You move your mouse inside of the container");
    document.body.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY},  ${e.offsetY}, 0.1)`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},  233)`;
    // document.body.style.backgroundColor = "red";
})
