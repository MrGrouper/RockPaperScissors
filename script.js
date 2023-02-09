// // Initiate scores
var playerScore = 0;
var computerScore = 0;
var round = 0;

initiate()

function initiate(){
playerScore = 0;
computerScore = 0;
round = 0;
document.getElementById("player_score").textContent = playerScore;
document.getElementById("round").textContent = round;
document.getElementById("computer_score").textContent = computerScore;
document.getElementById("info"
  ).textContent = "Can you beat the computer?"
  return;
}
//Takes players click selection
var rockBtn = document.querySelector('#rock_btn');
rockBtn.addEventListener("click", () => {
    game('rock');
  })
  var paperBtn = document.querySelector('#paper_btn');
  paperBtn.addEventListener("click", () => {
      game('paper');
    })
   var scissorsBtn = document.querySelector('#scissors_btn');
scissorsBtn.addEventListener("click", () => {
    game('scissors');
  })

  //Reset button reset scores, display intro message
const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener("click", () => {
    initiate();
  })

//Generates random computer choice
function getComputerChoice() {
  var options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Play rock paper scissors: compare player selection and computer selection and declare winner

function playRound(player) {
  // If player throw same thing its a tie
  var computer = getComputerChoice();
  if (player === computer) {
    document.getElementById("info").textContent = "Tie! Shoot again";
    return playerScore;
  }
  // Player loses
  else if (
    (player === "scissors" && computer === "rock") ||
    (player === "paper" && computer === "scissors") ||
    (player === "rock" && computer === "paper")
  ) {
    computerScore = computerScore + 1; // increment score
    if (computerScore === 5){ //if computer gets to 5 points exit to game function
        game()
        return;
    }
    else {
    document.getElementById(
      "info"
    ).textContent = "You lose that hand!";
    return computerScore;
    }
  }
  //Player wins
  else {
    playerScore = playerScore + 1; //Increment Score
    if (playerScore === 5){ //if player gets to 5 points exit to game function
        game()
        return;
    }
    else {
    document.getElementById(
      "info"
    ).textContent = "You Win that hand!";
    return playerScore;
    }
  }
}

function game(player) {
  if (computerScore === 5) {
    document.getElementById("info").textContent = "You lose!";
    return;
  
  } else if (playerScore === 5) {
    document.getElementById("info").textContent = "You Win the round!";
    return;
  } else {
    round++;
    playRound(player);
    document.getElementById("player_score").textContent = playerScore;
    document.getElementById("round").textContent = round;
    document.getElementById("computer_score").textContent = computerScore;
  }
}

// function playAgain(){
// playerScore === 0;
// computerScore === 0;
// round === 0;
// document.getElementById("info"
//   ).textContent = "Can you beat the computer?"
//   return;
// }