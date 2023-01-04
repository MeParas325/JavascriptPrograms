const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

const choices = document.querySelectorAll("button");
let userChoice, computerChoice;

let arr = ["rock", "paper", "scissor"];
choices.forEach(choice => choice.addEventListener("click", (e)=>{

    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    computerChoice = arr[Math.floor(Math.random()*arr.length)];
    computerChoiceDisplay.innerHTML = computerChoice;

    if(userChoice == "rock" && computerChoice == "rock") result.innerHTML = "Draw!";
    else if(userChoice == "rock" && computerChoice == "paper") result.innerHTML = "Computer win";
    else if(userChoice == "rock" && computerChoice == "scissor") result.innerHTML = "User win";
    else if(userChoice == "paper" && computerChoice == "rock") result.innerHTML = "User win";
    else if(userChoice == "paper" && computerChoice == "paper") result.innerHTML = "Draw!";
    else if(userChoice == "paper" && computerChoice == "scissor") result.innerHTML = "Computer win";
    else if(userChoice == "scissor" && computerChoice == "rock") result.innerHTML = "Computer win";
    else if(userChoice == "scissor" && computerChoice == "paper") result.innerHTML = "User win";
    else if(userChoice == "scissor" && computerChoice == "scissor") result.innerHTML = "Draw!";

}))