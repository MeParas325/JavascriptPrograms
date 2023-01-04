let arr = ["rock", "paper", "scissor"];

let input = prompt("Which would you choose? Rock, Paper, Scissor");

const lower = (str) =>{
    return str.toLowerCase();
}
input = lower(input);

let randValue = arr[Math.floor(Math.random() * arr.length)];

if(input == "rock" && randValue == "rock") console.log("Draw!");
else if(input == "rock" && randValue == "paper") console.log("Computer win");
else if(input == "rock" && randValue == "scissor") console.log("User win");
else if(input == "paper" && randValue == "rock") console.log("User win");
else if(input == "paper" && randValue == "paper") console.log("Draw!");
else if(input == "paper" && randValue == "scissor") console.log("Computer win");
else if(input == "scissor" && randValue == "rock") console.log("Computer win");
else if(input == "scissor" && randValue == "paper") console.log("User win");
else if(input == "scissor" && randValue == "scissor") console.log("Draw!");
else console.log("Please check your input.");



