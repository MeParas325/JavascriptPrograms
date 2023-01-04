console.log("This is exercise 3");

//Create a new element
let divElem = document.createElement("div");

//Add text to that created elemenrt
let val = localStorage.getItem("text");
let text;
if(val == null){
    text = document.createTextNode("This is me. Now edit me");
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

//Give element id, style, classes
divElem.setAttribute("id", "elem");
divElem.setAttribute("style", "border: 2px solid red; width: 150px; margin: 23px; padding: 30px");
divElem.setAttribute("class", "elem");

//Grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("MyFirst");
// console.log(divElem, container, first);

//Insert element before element with id first
container.insertBefore(divElem, first);

//Add eventlistner to the div element
divElem.addEventListener("click", function () {
    let noTextAreas = document.getElementsByClassName("textarea").length;
    if(noTextAreas == 0){
    let html = elem.innerHTML;
    divElem.innerHTML =  `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    //Listening for the blur event in text area
    let textarea = document.getElementById("textarea");
    textarea.addEventListener("blur", function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem("text", textarea.value);
        
    })
})

