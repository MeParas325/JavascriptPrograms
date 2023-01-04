const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.result');

let currentShooterIndex = 202
let aliensRemoved = []
let width = 15;
let direction = 1;
let moveInvadersId;
let goingRight = true;
let score = 0;

for(let i = 0; i<225; i++){
    //creating and appending squares into the grid
    const square = document.createElement("div")
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"))

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

// Draw the invader blocks inside the grid box
function drawInvaders(){
    for(let i = 0; i<alienInvaders.length; i++){
        if(!aliensRemoved.includes(i)){
            squares[alienInvaders[i]].classList.add("invader")
        }
       
    }
}

//function call to drawinvader function
drawInvaders()

// remove the invader blocks inside the grid box
function removeInvaders(){
    for(let i = 0; i<alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.remove("invader")
    }
}

//function call to drawinvader function
removeInvaders()

//adding shooter
squares[currentShooterIndex].classList.add("shooter")

//moving shooter
function moveShooter(e){
    squares[currentShooterIndex].classList.remove("shooter");
    switch (e.key) {
        case "ArrowLeft":
            if(currentShooterIndex % width != 0) currentShooterIndex -= 1
            break
        
        case "ArrowRight":
            if(currentShooterIndex % width < width - 1)currentShooterIndex += 1;
            
    
        default:
            break;
    }
    squares[currentShooterIndex].classList.add("shooter");

}

document.addEventListener("keydown", moveShooter);

function moveInvaders(){
    const leftSide = alienInvaders[0] % width == 0
    const rightSide = alienInvaders[alienInvaders.length - 1] % width == width - 1
    removeInvaders()

    if(rightSide && goingRight){
        for(let i = 0; i<alienInvaders.length; i++){
            alienInvaders[i] += width + 1;
            direction = -1;
            goingRight = false;
        }
    }

    if(leftSide && !goingRight){
        for(let i = 0; i<alienInvaders.length; i++){
            alienInvaders[i] += width - 1;
            direction = 1;
            goingRight = true;
        }
    }

    for(let i = 0; i<alienInvaders.length; i++)alienInvaders[i] += direction;

    drawInvaders();

    if(squares[currentShooterIndex].classList.contains("invader", "shooter")){
        resultDisplay.innerHTML = "Game Over"
        clearInterval(moveInvadersId)
    }

    for(let i = 0; i<alienInvaders.length; i++){
        if(alienInvaders[i]>=squares.length){
            resultDisplay.innerHTML = "Game Over";
            clearInterval(moveInvadersId)

        }
    }

    if(aliensRemoved.length == alienInvaders.length){
        resultDisplay.innerHTML = "You Win"
        clearInterval(moveInvadersId)
    }
}

moveInvadersId = setInterval(moveInvaders, 500)

//shoot laser
function shoot(e){
    let laserId
    let currentLaserIndex = currentShooterIndex

    function moveLaser(){
        
        squares[currentLaserIndex].classList.remove("laser")
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add("laser")

        if(squares[currentLaserIndex].classList.contains("invader")){
            squares[currentLaserIndex].classList.remove("laser")
            squares[currentLaserIndex].classList.remove("invader")
            squares[currentLaserIndex].classList.add("boom")
            resultDisplay.innerHTML = score++

            setTimeout(() => squares[currentLaserIndex].classList.remove("boom"), 300);
            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            aliensRemoved.push(alienRemoved)
        }
    }

    switch(e.key){
        case " ":
            laserId = setInterval(moveLaser, 100);
    }
}

document.addEventListener("keydown", shoot);