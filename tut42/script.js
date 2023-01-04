if(first.hasAttribute('class')){
    console.log("The class name is:"+first.getAttribute('class'));
}else{
    console.log("Element does not have any class attribute.");
}

first.setAttribute("class", "tanuja paras");
first.removeAttribute("class");

console.log(first.attributes);
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);