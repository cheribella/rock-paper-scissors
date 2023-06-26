const getUserChoice = document.querySelectorAll(".choice");
const choiceArray = Array.from(getUserChoice);

const button = document.getElementsByTagName("button");

function getComputerChoice() {
  let index = Math.floor(Math.random() * choiceArray.length);
  const computerChoice = choiceArray[index];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let userScore = 0;
  let computerScore = 0;

  if (playerSelection === computerSelection) {
    userScore = 0;
    computerScore = 0;
  } else if (
    (playerSelection === choiceArray[0] &&
      computerSelection === choiceArray[2]) ||
    (playerSelection === choiceArray[1] &&
      computerSelection === choiceArray[0]) ||
    (playerSelection === choiceArray[2] && computerSelection === choiceArray[1])
  ) {
    userScore = 1;
    computerScore = 0;
  } else {
    userScore = 0;
    computerScore = 1;
  }

  return { userScore, computerScore };
}

function game() {
  const playerScoreText = document.querySelector(".player-score");
  const computerScoreText = document.querySelector(".computer-score");
  const resultText = document.querySelectorAll(".visible");
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < choiceArray.length; i++) {
    choiceArray[i].addEventListener("click", function () {
      const computerChoice = getComputerChoice();
      const userChoice = choiceArray[i];
      const { userScore: roundUserScore, computerScore: roundComputerScore } =
        playRound(userChoice, computerChoice);

      userScore += roundUserScore;
      computerScore += roundComputerScore;

      console.log(`Player choice: ${userChoice}`);
      console.log(`Computer choice: ${computerChoice}`);
      console.log(`Player score: ${userScore}`);
      console.log(`Computer score: ${computerScore}`);

      if (userScore + computerScore >= 5) {
        for (let j = 0; j < choiceArray.length; j++) {
          choiceArray[j].disabled = true;
        }
        playerScoreText.innerHTML = `Score: ${userScore}`;
        computerScoreText.innerHTML = `Score: ${computerScore}`;
        for (let k = 0; k < resultText.length; k++) {
          resultText[k].style.visibility = "visible";
        }
        if (userScore > computerScore) {
          playerScoreText.classList.add("winner");
          computerScoreText.classList.add("loser");
        } else {
          playerScoreText.classList.add("loser");
          computerScoreText.classList.add("winner");
        }
      } else {
        for (let k = 0; k < resultText.length; k++) {
          resultText[k].style.visibility = "hidden";
        }
      }
    });
  }

  button.disabled = true;
}

game();
