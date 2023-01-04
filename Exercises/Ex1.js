let a = document.links;
let str = "com";
let link;

Array.from(a).forEach(element => {
    if((element.href).includes("css"))
    console.log(element.href);
});