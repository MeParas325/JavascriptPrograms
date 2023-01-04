const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
const ballDiameter = 20;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

let timerId;
let score = 0;

let xDirection = -2;
let yDirection = 2;
//create block
class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft =  [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]

//draw my block
function addBlock(){
    for(let i = 0; i<blocks.length; i++){
        const block = document.createElement("div");
        block.classList.add("block");
        grid.appendChild(block);
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';

    }
}

addBlock();

//draw User
function drawUser(){
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';

}

//add user
const user = document.createElement("div");
grid.appendChild(user);
drawUser();
user.classList.add("user");

//move user
function moveUser(e){
    switch(e.key){
        case "ArrowLeft":
            if(userStart[0] > 0){
                userStart[0] -= 10;
                drawUser();
            }
            break;
        case "ArrowRight":
            if(userStart[0] < boardWidth - blockWidth){
                userStart[0] += 10;
                drawUser();
            }
            break;
    }      
}

document.addEventListener("keydown", moveUser);

//draw ball
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}

//move ball
function moveBall(){
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkColisions();
}

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

timerId = setInterval(moveBall, 30);

//check colisions
function checkColisions(){

    //check for block collisions
    for(let i = 0; i<blocks.length; i++){
        if((ballCurrentPosition[0] > blocks[i].bottomLeft[0]) && (ballCurrentPosition[0] < blocks[i].bottomRight[0]) && (ballCurrentPosition[1] + ballDiameter > blocks[i].topLeft[1]) && (ballCurrentPosition[1] < blocks[i].topRight[1])){
            const allBlocks = Array.from(document.querySelectorAll(".block"));
            console.log(allBlocks);
            allBlocks[i].classList.remove("block");
            blocks.splice(i, 1);
            changePosition();
            score++;
            scoreDisplay.innerHTML = score;
        }
    }

    //check for collisons
    if(ballCurrentPosition[0] >= boardWidth - ballDiameter || ballCurrentPosition[1] >= boardHeight - ballDiameter || ballCurrentPosition[0] <= 0){
        changePosition();
    }

    //check for user collisions
    if((ballCurrentPosition[0] > currentPosition[0]) && (ballCurrentPosition[0] < currentPosition[0] + blockWidth) && (ballCurrentPosition[1] > currentPosition[1]) && (ballCurrentPosition[1] < currentPosition[1] + blockHeight)){
        console.log("insite user collision")
        changePosition();
    }

    //check for game over
    if(ballCurrentPosition[1] <= 0){
        clearTimeout(timerId);
        scoreDisplay.innerHTML = "You Lose";
        document.removeEventListener("keydown", moveUser);
    }

    //check for user won
    if(blocks.length == 0){
        scoreDisplay.innerHTML = "You Win";
        clearInterval(timerId);
        document.removeEventListener("keydown", moveUser);
    }
}

//changePosition
function changePosition(){
    if(xDirection == 2 && yDirection == 2){
        yDirection = -2;
        return;
    }
    if(xDirection == 2 && yDirection == -2){
        xDirection = -2;
        return;
    }
    if(xDirection == -2 && yDirection == -2){
        yDirection = 2;
        return;
    } 
    if(xDirection == -2 && yDirection == 2){
        xDirection = 2;
        return;
    }
    
}

