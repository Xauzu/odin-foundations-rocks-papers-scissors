// Uses random number generator to choose an option for the computer
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "Rock";
    }
    else if (rand === 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

// Compares the options chosen btw the player and computer.
// Returns the final result with the initial letter designating the result.
function playRound(playerSelection, computerSelection) {
    // First letter uppercase of userinput
    let input = playerSelection.toLowerCase();
    let userInput = input.at(0).toUpperCase() + input.slice(1);

    // Tie
    if (userInput === computerSelection) {
        return "tYou Tied! Both of you chose " + computerSelection + ".";
    }

    // Lost
    else if (userInput === "Rock" && computerSelection === "Paper"
            || userInput === "Paper" && computerSelection === "Scissor"
            || userInput === "Scissor" && computerSelection === "Rock") {
                return "cYou Lose! " + computerSelection + " beats " + userInput + ".";
            } 

    // Won
    else {
        return "pYou Win! " + userInput + " beats " + computerSelection + "."; 
    }
}

// Variables for scores
let playerScore = 0;
let computerScore = 0;
let totalGames = 0;
function updateResult(result) {
    // Get first letter of the return string to check result
    let score = result.at(0);

    // Getting rid of the first letter to display the round result to user
    result = result.slice(1);
    console.log(result);

    if (score === "p") {
        playerScore++;
    }
    else if (score === "c") {
        computerScore++;
    }

    totalGames++;

    //Update with round text and score
    document.querySelector(".result").textContent = result;
    document.querySelector(".score").textContent = "(You) " + playerScore + " - " + computerScore + " (computer)";
    document.querySelector(".totalGames").textContent = totalGames + " Games";
}

function init() {
    const buttons = document.querySelectorAll(`.gameButton`);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
                let result = playRound(button.getAttribute('data-option'), getComputerChoice());
                updateResult(result);
        });

        button.addEventListener('transitionend', removeTransition)
    });
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
}

init();