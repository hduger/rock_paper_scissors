//Global Variables

let playerCount = 0;
let compCount = 0;
let tieCount = 0;
let playerSelection;
let computerSelection;

const rock = document.getElementById('#rockButton');
rock.addEventListener("click", () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});
const paper = document.getElementById('#paperButton');
paper.addEventListener("click", () => {
    playerSelection = 'paper';
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
});
const scissors = document.getElementById('#scissorsButton');
scissors.addEventListener("click", () => {
    playerSelection = 'scissors';
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
});

// This function picks a random number between 1 and 3
//and it assigns rock, paper, or scissors based on the number
function computerPlay() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 3){
        return "Rock";
    } else if (randNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound() {
    playerSelection = playerSelection;
    computerSelection = computerPlay();
    plyScore = document.querySelector('#plrScore');
    compScore = document.querySelector('#cptScore');
    tieScore = document.querySelector('#tieCount');
        if (playerSelection==="rock" && computerSelection==="Scissors" || 
        playerSelection==="scissors" && computerSelection === "Paper" || 
        playerSelection==="paper" && computerSelection==="Rock") {
            playerCount++
            plyScore.textContent = playerCount;
            if (playerCount===5) {
                declareWinner();
            }
        } else if (
        (playerSelection==="rock" && computerSelection === "Paper") ||
        (playerSelection==="paper" && computerSelection==="Scissors") ||
        (playerSelection==="scissors" && computerSelection==="Rock")) {
            compCount++;
            compScore.textContent = compCount;
            if (compCount===5) {
                declareWinner();
            }
        } else {
            tieCount++;
            tieScore.textContent = tieCount;
            return "Tie!";
        }

}

function declareWinner () {
    gameResult = document.querySelector("#gameResults");
    if (playerCount > compCount) {
        gameResult.textContent= "You Have Beaten The Computer!!!!";
        gameResult.style.textShadow = "4px 4px 6px green";
        
    } else if (compCount > playerCount) {
        gameResult.textContent= "GAME OVER! The Computer Has Won!";
        gameResult.style.textShadow = "4px 4px 6px red";
    }
}

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
