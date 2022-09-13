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

function playRound() {
  const myChoice = getPlayerSelection();
  const computerChoice = getComputerChoice();

  if (myChoice === computerChoice) {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "Draw!";
  } else if (myChoice === "rock" && computerChoice === "paper") {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "You Lose! Paper beats Rock";
  } else if (myChoice === "rock" && computerChoice === "scissors") {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "You Win! Rock beats Scissors";
  } else if (myChoice === "paper" && computerChoice === "rock") {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "You Win! Paper beats Rock";
  } else if (myChoice === "paper" && computerChoice === "scissors") {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "You Lose! Scissors beats Paper";
  } else if (myChoice === "scissors" && computerChoice === "rock") {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "You Lose! Rock beats Scissors";
  } else if (myChoice === "scissors" && computerChoice === "paper") {
    let round = `PC: ${computerChoice}\nYOU: ${myChoice}\n`;
    return round + "You Win! Scissors beats Paper";
  }
}

function game() {
  let myScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    // console.log(`ROUND ${i}:\n` + playRound());
    let log = `ROUND ${i}:\n` + playRound();
    console.log(log);
    if (log.includes("You Win!")) {
      myScore++;
    } else if (log.includes("You Lose!")) {
      computerScore++;
    }
  }
  if (myScore > computerScore) {
    console.log(`You Won the Game: ${myScore} - ${computerScore}`);
  } else if (myScore < computerScore) {
    console.log(`You Lost the Game: ${myScore} - ${computerScore}`);
  } else {
    console.log(`It's a Draw: ${myScore} - ${computerScore}`);
  }
}
