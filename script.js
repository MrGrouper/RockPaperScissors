// // Initiate scores, round, and text
var playerScore = 0;
var computerScore = 0;
var round = 0;

initiate()

function initiate(){
playerScore = 0;
computerScore = 0;
round = 0;
document.getElementById("p_hand").textContent = '🧍🏽‍♀️';
document.getElementById("c_hand").textContent = '🖥';
document.getElementById("player_score").textContent = 'Player: ' + playerScore;
document.getElementById("computer_score").textContent = 'Computer: '+computerScore;
document.getElementById("info"
  ).textContent = "Can you beat the computer?" +"\n" + "First to 5 wins!"
  document.getElementById("reset").textContent ="Reset";
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

  //Reset button reset scores, display intro message by calling initate funtion
const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener("click", () => {
    initiate();
    document.getEle
  }) 

//Generates random computer choice
function getComputerChoice() {
  var options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Play rock paper scissors: compare player selection and computer selection and declare winner

function playRound(player) {

    document.getElementById("p_hand").textContent = '';
    document.getElementById("c_hand").textContent = '';
    document.getElementById("reset").textContent ="Reset";
  // If player throw same thing its a tie
  var computer = getComputerChoice();

  var newElp = document.getElementById(player+'_btn').cloneNode(true);
  document.getElementById("p_hand").appendChild(newElp);

  var newElc = document.getElementById(computer+'_btn').cloneNode(true);
  document.getElementById("c_hand").appendChild(newElc)

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
    ).textContent = `You lose! ${computer[0].toUpperCase()+computer.slice(1)} beats ${player}`;
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
    ).textContent = `${player[0].toUpperCase()+player.slice(1)} beats ${computer}! Nice!`;
    return playerScore;
    }
  }
}

function game(player) {
  if (computerScore === 5) {
    document.getElementById("info").textContent = "You lose!";
    document.getElementById("reset").textContent ="Play again?";
    return;
  
  } else if (playerScore === 5) {
    document.getElementById("info").textContent = "You Win!";
    document.getElementById("reset").textContent ="Play again?";
    return;
  } else {
    round++;
    playRound(player);
    document.getElementById("player_score").textContent = 'Player: '+ playerScore;
    document.getElementById("computer_score").textContent = 'Computer: ' + computerScore;
  }
}

