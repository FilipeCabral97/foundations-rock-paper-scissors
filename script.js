let myScore = 0;
let computerScore = 0;
let currentRound = 1;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
  const selection = prompt(
    "Choose: Rock / Paper / Scissors"
  ).toLocaleLowerCase();

  if (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    alert("Invalid choice, choose again.");
    getPlayerSelection();
  } else {
    return selection;
  }
}

function playRound(e) {
  const myChoice = e.target.innerText.toLowerCase();
  const computerChoice = getComputerChoice();

  console.log(currentRound);
  if (currentRound <= 5) {
    roundHeader.innerText = "Round " + currentRound;
    if (myChoice === computerChoice) {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      resultParagraph.innerText = roundInfo + "Draw!";
    } else if (myChoice === "rock" && computerChoice === "paper") {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      computerScore++;
      resultParagraph.innerText = roundInfo + "You Lose! Paper beats Rock";
    } else if (myChoice === "rock" && computerChoice === "scissors") {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      myScore++;
      resultParagraph.innerText = roundInfo + "You Win! Rock beats Scissors";
    } else if (myChoice === "paper" && computerChoice === "rock") {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      myScore++;
      resultParagraph.innerText = roundInfo + "You Win! Paper beats Rock";
    } else if (myChoice === "paper" && computerChoice === "scissors") {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      computerScore++;
      resultParagraph.innerText = roundInfo + "You Lose! Scissors beats Paper";
    } else if (myChoice === "scissors" && computerChoice === "rock") {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      computerScore++;
      resultParagraph.innerText = roundInfo + "You Lose! Rock beats Scissors";
    } else if (myChoice === "scissors" && computerChoice === "paper") {
      let roundInfo = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
      myScore++;
      resultParagraph.innerText = roundInfo + "You Win! Scissors beats Paper";
    }
    currentRound++;
  }
  if (currentRound > 5) {
    roundHeader.innerText = "End!";

    if (myScore > computerScore) {
      endParagraph.innerText = `You Won the Game: ${myScore} - ${computerScore}`;
    } else if (myScore < computerScore) {
      endParagraph.innerText = `You Lost the Game: ${myScore} - ${computerScore}`;
    } else {
      endParagraph.innerText = `It's a Draw: ${myScore} - ${computerScore}`;
    }

    buttons.forEach((button) => (button.style.display = "none"));
    playAgainBtn.style.display = "";
  }
}

const reset = () => {
  myScore = 0;
  computerScore = 0;
  currentRound = 1;
  roundHeader.innerText = "Start!";
  buttons.forEach((button) => (button.style.display = ""));
  playAgainBtn.style.display = "none";
  resultParagraph.innerText = "";
  endParagraph.innerText = "";
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => button.addEventListener("click", playRound));

const resultsContainer = document.querySelector(".results-container");
const resultParagraph = document.querySelector("#round-result");
const endParagraph = document.querySelector("#end-result");
const roundHeader = document.querySelector("#round");
roundHeader.innerText = "Start!";

const playAgainBtn = document.querySelector("#play-again-btn");
playAgainBtn.style.display = "none";
playAgainBtn.addEventListener("click", reset);
