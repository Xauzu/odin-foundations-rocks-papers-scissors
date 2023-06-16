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

function playRound(playerSelection, computerSelection) {
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let totalGames = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt("Rock, Paper, or Scissor? "), getComputerChoice());
        let score = result.at(0);

        result = result.slice(1);
        console.log(result);
        
        if (score === "p") {
            playerScore++;
        }
        else if (score === "c") {
            computerScore++;
        }
        
        console.log();

        totalGames++;
    }

    console.log("Final score: " + playerScore +"(You) to " + computerScore);
}

game();