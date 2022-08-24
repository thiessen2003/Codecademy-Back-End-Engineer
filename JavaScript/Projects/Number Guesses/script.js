let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*9);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanValue = Math.abs(humanGuess - secretTarget);
    const computerValue = Math.abs(computerGuess - secretTarget);
    if(humanValue > computerValue) {
        return false;
    } else {
        return true;
    }
}

const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore =+ 1;
    } else if (winner === 'computer') {
        computerScore =+1;
    }
}

const advanceRound = () => {
    currentRoundNumber =+ 1;
}