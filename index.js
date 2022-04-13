let playerScore = 0;
let computerScore = 0;
let round = 0;
const btn = document.querySelectorAll("button");

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
    console.log("tie");
    return "tie";
  } else if (a == "rock" && computerSelect == "paper") {
    console.log("lost");
    return "lost";
  } else if (a == "rock" && computerSelect == "scissor") {
    console.log("win");
    return "win";
  } else if (a == "paper" && computerSelect == "paper") {
    console.log("tie");
    return "tie";
  } else if (a == "paper" && computerSelect == "rock") {
    console.log("win");
    return "win";
  } else if (a == "paper" && computerSelect == "scissor") {
    console.log("lost");
    return "lost";
  } else if (a == "scissor" && computerSelect == "scissor") {
    console.log("tie");
    return "tie";
  } else if (a == "scissor" && computerSelect == "rock") {
    console.log("lost");
    return "lost";
  } else if (a == "scissor" && computerSelect == "paper") {
    console.log("win");
    return "win";
  } else {
    return "pick rock, paper or scissor";
  }
}

function game() {
  btn.forEach((btn) => {
    // and for each one we add a 'click' listener
    btn.addEventListener("click", (e) => {
      let playerSelect = btn.value;
      if (round < 5) {
        let computer = computerPlay();
        playRound(playerSelect, computer);
      } else {
        return console.log("the game is finished");
      }
    });
  });
}

game();
