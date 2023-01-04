console.log("This is javascript tutorial");

let important = ["adrak", "Poha", "bhindi"];
//Added key value pair
// localStorage.setItem("Name", "Paras");
// localStorage.setItem("Name2", "Tannu");
// localStorage.setItem("Sabzi", JSON.stringify(important));

//Clear the local storage
// localStorage.clear();

//Remove the particular item from the localstorage
// localStorage.removeItem("Name");

//Retrive the item form the local storage
let name = localStorage.getItem("Name2");
let Sabzi = JSON.parse(localStorage.getItem("Sabzi"));
console.log(Sabzi);
// localStorage.clear();

// sessionStorage.setItem("Name", "Paras");
// sessionStorage.setItem("Name2", "Tannu");
// sessionStorage.setItem("Sabzi", JSON.stringify(important));