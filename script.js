const arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * arr.length);
  const computerChoice = arr[index];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let score = 0;
  if (playerSelection === computerSelection) {
    score = 0;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    score = 1;
  }
  return score;
}

function game() {
  let score = 0;
  for (i = 0; i < 5; i++) {
    const userInput = prompt("What is your choice? ");
    const userChoice =
      userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    const computerChoice = getComputerChoice();
    score += playRound(userChoice, computerChoice);
  }

  let result;
  if(score >= 3) {
    result = `You scored ${score}. You won!`;
  }
  else {
    result = `You scored ${score}. You lost.`;
  }

  return result;
}

console.log(game());
