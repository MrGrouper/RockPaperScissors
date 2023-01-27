// Create function that outputs randomly selects rock paper or scissors for computers choice

function getComputerChoice() {
let options = ["rock", "paper", "scissors"];
return options[Math.floor(Math.random()*options.length)]
}



// Play rock paper scissors: compare player selection and computer selection and declare winner

let playerScore = 0;
let computerScore = 0;

function play() {
    // If player throw same thing its a tie
    let player = playerSelection();
    let computer = getComputerChoice();
    console.log(player);
    console.log(computer);
    if (player === computer){
        alert("Tie! Shoot again");
        play(); //Re-execute function if there is a tie
      
    }
    // Player loses
    else if (player === "scissors" && computer === "rock" || player === "paper" && computer === "scissors" || player === "rock" && computer === "paper") {
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


// Player is prompted to make selection
function playerSelection() {
     let hand = prompt("Select your weapon: rock, paper, or scissors?");
     // If player picks a correct choice, return player selection
    if (hand.toLowerCase() === "rock" || hand.toLowerCase() === "paper" || hand.toLowerCase() === "scissors") {
        return hand.toLowerCase();
    }
    else {
        alert("Thats not right ya dingus pick again");
        playerSelection();
    }
} 

function game(){
    for(let i = 0; i<5; i++){
        play()
        console.log(i);
    }
    if (computerScore > playerScore){
        alert("You lose. Sorry loser.");
    }
    else if (playerScore > computerScore){
        alert("Congrats, You've beaten the computer'!")}
    else {"Tie! Refresh to play again!"}
}

game();
