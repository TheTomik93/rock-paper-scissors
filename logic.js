let playerPlayed;
let computerPlayed;
let playerScore = 0;
let computerScore = 0;

function game(){
    while(playerScore < 5 && computerScore < 5){
        let userchoice = prompt("rock / paper / scissors").toLowerCase();
        switch (userchoice){
            case "rock":
                rock();
                break;
            case "paper":
                paper();
                break;
            case "scissors":
                scissors();
                break;
            default:
                alert("only rock / paper / scissors input accepted");
        }
    }
}

function computerPlay(){
    let rnd = Math.floor(Math.random()*3)+1;
    switch(rnd){
        case 1:
            computerPlayed = "Rock";
            console.log("Computer played " + computerPlayed);
            break;
        case 2:
            computerPlayed = "Paper";
            console.log("Computer played " + computerPlayed);
            break;
        case 3:
            computerPlayed = "Scissors";
            console.log("Computer played " + computerPlayed);
            break;
    }
}
/* Its not the smartest to make three separate functions, as this solution is not scalable, but whatever, its just a test without UI */
function rock(){
    playerPlayed = "Rock";
    console.log("Player played " + playerPlayed);
    computerPlay();
    switch(computerPlayed){
        case "Rock":
            console.log("Its a Tie")
            break;
        case "Paper":
            console.log("Paper beats rock, you lose")
            computerScore++;
            break;
        case "Scissors":
            console.log("Rock beats scissors, you win")
            playerScore++;  
            break;
    }
    console.log(`Player score: ${playerScore} ... Computer score: ${computerScore}`);
}
function paper(){
    playerPlayed = "Paper";
    console.log("Player played " + playerPlayed);
    computerPlay();
    switch(computerPlayed){
        case "Paper":
            console.log("Its a Tie")
            break;
        case "Scissors":
            console.log("Scissors beat paper, you lose")
            computerScore++;
            break;
        case "Rock":
            console.log("Paper beats rock, you win")
            playerScore++;
            break;
    }
    console.log(`Player score: ${playerScore} ... Computer score: ${computerScore}`);
}
function scissors(){
    playerPlayed = "Scissors";
    console.log("Player played " + playerPlayed);
    computerPlay();
    switch(computerPlayed){
        case "Scissors":
            console.log("Its a Tie")
            break;
        case "Rock":
            console.log("Rock beats scissors, you lose")
            computerScore++;
            break;
        case "Paper":
            console.log("Scissors beat paper, you win")
            playerScore++;
            break;
    }
    console.log(`Player score: ${playerScore} ... Computer score: ${computerScore}`);
}