// console.log("Memory Game");
const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

const arr = [1, 4, 35, 0, -1];
let cardChosen = [];
let cardChosenIds = [];
const cardWon = [];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector("#result");

function create(){
    for(let i = 0; i<12; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        console.log(card, i);
        gridDisplay.appendChild(card);
    }
}

create();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if(optionOneId === optionTwoId){
        alert("You clicked on the same image!");
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");

    }

    else if(cardChosen[0] === cardChosen[1]){
        alert("Your card is matched.");
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);

        cardWon.push(cardChosen);
        
    }else{
        alert("Sorry try again!");
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardChosen = [];
    cardChosenIds = [];
    
    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML = cardWon.length;
    }
}

function flipCard(){
    console.log(cardArray);
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log("clicked", cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
    
}