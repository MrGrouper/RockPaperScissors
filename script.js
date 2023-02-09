// Initiate scores
var playerScore = 0;
var computerScore = 0;
var round = 0;

document.getElementById("player_score").textContent = playerScore;
document.getElementById("round").textContent = round;
document.getElementById("computer_score").textContent = computerScore;

//Takes players click selection
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
    console.log(button.id);
  });
});

//Generates random computer choice
function getComputerChoice() {
  var options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Play rock paper scissors: compare player selection and computer selection and declare winner

function playRound(player) {
  // If player throw same thing its a tie
  var computer = getComputerChoice();
  console.log(player);
  console.log(computer);
  if (player === computer) {
    alert("Tie! Shoot again");
    return playerScore;
  }
  // Player loses
  else if (
    (player === "scissors" && computer === "rock") ||
    (player === "paper" && computer === "scissors") ||
    (player === "rock" && computer === "paper")
  ) {
    computerScore = computerScore + 1; // increment score
    alert(`You lose! ${computer} beats ${player}.
        You: ${playerScore} 
        Computer: ${computerScore}`);
    return playerScore;
  }
  //Player wins
  else {
    playerScore = playerScore + 1; //Increment Score
    alert(`You Win! ${player} beats ${computer}.
        You: ${playerScore}
        Computer: ${computerScore}`);
    return computerScore;
  }
}

function game(player) {
  round++;
  playRound(player);
  document.getElementById("player_score").textContent = playerScore;
  document.getElementById("round").textContent = round;
  document.getElementById("computer_score").textContent = computerScore;
}


