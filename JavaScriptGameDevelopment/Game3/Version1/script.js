const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");

let result = 0;
let hitPosition = null;
let timeId, countDownId;
let countTime = 60;
 
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove("mole");
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id;
}

function countDown(){
    countTime--;
    timeLeft.innerHTML = countTime;

    if(countTime == 0){
        alert("Game Over! Your score is: "+result);
        clearInterval(timeId);
        clearInterval(countDownId);
    }


}

squares.forEach(square => square.addEventListener("mousedown", ()=>{
    if(square.id == hitPosition){
        result++;
        score.innerHTML = result;
    }
}))

timeId = setInterval(randomSquare, 500);
console.log(timeId);
countDownId = setInterval(countDown, 1000);
console.log(countDownId);
