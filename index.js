let playerScore = 0;
let computerScore = 0;
let round = 0;
const btn = document.querySelectorAll("button");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerPick");
const roundText = document.getElementById("score");
const computerWin = document.getElementById("computerWin");
const playerWin = document.getElementById("playerWin");
const result = document.getElementById("result");

// this function will produce a random pick for computer
// it will produce an int of 1-10 and return the corresponding if else statement
function computerPlay() {
  let comp = Math.floor(Math.random() * 10);
  if (comp == 0 || comp == 1 || comp == 2) {
    return "rock";
  } else if (comp == 3 || comp == 4 || comp == 5) {
    return "paper";
  } else if (comp == 6 || comp == 7 || comp == 8 || comp == 9) {
    return "scissor";
  }
}

// this function will play a round of game
function playRound(playerSelect, computerSelect) {
  console.log("Human => " + playerSelect + "\ncomputer => " + computerSelect);

  let a = playerSelect;

  if (a == "rock" && computerSelect == "rock") {
    return result.textContent = "tie";
  } else if (a == "rock" && computerSelect == "paper") {
    computerScore += 1;
    computerWin.textContent = `${computerScore}`;
    return result.textContent = "lost";
  } else if (a == "rock" && computerSelect == "scissor") {
    playerScore += 1;
    playerWin.textContent = `${playerScore}`;
    return result.textContent = "win";
  } else if (a == "paper" && computerSelect == "paper") {
    return result.textContent = "tie";
  } else if (a == "paper" && computerSelect == "rock") {
    playerScore += 1;
    playerWin.textContent = `${playerScore}`;
    return result.textContent = "win";
  } else if (a == "paper" && computerSelect == "scissor") {
    computerScore += 1;
    computerWin.textContent = `${computerScore}`;
    return result.textContent = "lost";
  } else if (a == "scissor" && computerSelect == "scissor") {
    return result.textContent = "tie";
  } else if (a == "scissor" && computerSelect == "rock") {
    computerScore += 1;
    computerWin.textContent = `${computerScore}`;
    return result.textContent = "lost";
  } else if (a == "scissor" && computerSelect == "paper") {
    playerScore += 1;
    playerWin.textContent = `${playerScore}`;
    return result.textContent = "win";
  } else {
    return "pick rock, paper or scissor";
  }
}

function game() {
  btn.forEach((btn) => {
    // and for each one we add a 'click' listener
    btn.addEventListener("click", (e) => {
      if (round < 5) {
        round++;
        roundText.textContent = `Score - Round: ${round}`;
        let playerSelect = btn.value;
        let computer = computerPlay();
        playerPick.textContent = playerSelect;
        computerPick.textContent = computer;
        playRound(playerSelect, computer);
      } else {
        return (roundText.textContent =
          "game is finished please refresh the page to play again");
      }
    });
  });
}

game();
