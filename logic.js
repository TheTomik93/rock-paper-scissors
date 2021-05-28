let playerPlayed;
let computerPlayed;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let roundCount = 0;

const choices = ["Rock", "Paper", "Scissors"];

document.getElementById("Rock").addEventListener("click", game);
document.getElementById("Paper").addEventListener("click", game);
document.getElementById("Scissors").addEventListener("click", game);
document.getElementById("newGame").addEventListener("click", newGame);

function newGame(){
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    gameOver = false;
    document.getElementById('score').innerHTML = `To play the game simply click Rock, Paper, or Scissors! Player score: ${playerScore} ... Computer score: ${computerScore}`;
    
    const myNode = document.getElementById("battleLog");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }    
}

function game(){
    if (gameOver == false){
        playerPlayed = this.value;
        computerPlay();
        if (
            (playerPlayed === "Rock" && computerPlayed === "Scissors") ||
            (playerPlayed === "Paper" && computerPlayed === "Rock") ||
            (playerPlayed === "Scissors" && computerPlayed === "Paper")
            ) {
            playerScore++;
            battleLogAddItem("WIN");
            updateScore();
        }
        else if (
            (playerPlayed === "Rock" && computerPlayed === "Paper") ||
            (playerPlayed === "Paper" && computerPlayed === "Scissors") ||
            (playerPlayed === "Scissors" && computerPlayed === "Rock")
            ) {
            computerScore++;
            battleLogAddItem("LOSS");
            updateScore();
        }
        else {
            battleLogAddItem("TIE");
            updateScore();
        }
    }
}

function isGameActive(){
    if(playerScore < 5 && computerScore < 5){

        return true;
    }
    else {
        document.getElementById('score').innerHTML = `GAME OVER! Player: ${playerScore} - Computer: ${computerScore} ... press New Game to play again`;
        return false;
    }
}

function computerPlay(){
    let rnd = Math.floor(Math.random()*3);
    computerPlayed = choices[rnd];
}

function updateScore(){
    if(playerScore < 5 && computerScore < 5){
        document.getElementById('score').innerHTML = `Player score: ${playerScore} ... Computer score: ${computerScore}`;
    }
    else {
        document.getElementById('score').innerHTML = `GAME OVER! Player: ${playerScore} - Computer: ${computerScore} ... press New Game to play again`;
        gameOver = true;
    }
}let nodes = document.querySelectorAll('#Rock, #Paper, #Scissors');
console.log(nodes);
console.log(`ID ${nodes[0].id}`);
console.log(nodes[0].classList[0]);

function battleLogAddItem(result){
    let battleLogItem = document.createElement("p");
    roundCount++;
    let battleLogItemText = document.createTextNode(`(Round ${roundCount}) ${result}!!! Player played ${playerPlayed}, computer played ${computerPlayed}`);
    battleLogItem.appendChild(battleLogItemText);
    document.getElementById("battleLog").appendChild(battleLogItem);
}