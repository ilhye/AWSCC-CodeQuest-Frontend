// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const handSign = ["rock", "paper", "scissor"];
const result = document.getElementById("result");
const player1ChoiceDisplay = document.getElementById("player1Choice");
const player2ChoiceDisplay = document.getElementById("player2Choice");
const player1ScoreDisplay = document.getElementById("player1-score");
const player2ScoreDisplay = document.getElementById("player2-score");
let player1Score = 0, player2Score = 0;

// Step 3: Add event listeners to the buttons
function displayChoice(gameResult, player1Hand, player2Hand, player1Score, player2Score) {
    result.innerHTML = gameResult;
    player1ChoiceDisplay.innerHTML = player1Hand;
    player2ChoiceDisplay.innerHTML = player2Hand;
    player1ScoreDisplay.innerHTML = player1Score;
    player2ScoreDisplay.innerHTML = player2Score;
  }

  function userChoice(player1Choice) {
    const player2Choice = handSign[Math.floor(Math.random() * handSign.length)];

    switch (player1Choice) {
      case 'rock':
        if (player2Choice === 'scissor') {
          displayChoice("PLAYER 1 WIN", "👊", "✌", ++player1Score, player2Score);
        } else if (player2ChoiceDisplay === 'paper') {
          displayChoice("PLAYER 2 WIN", "👊", "✋", player1Score, ++player2Score);
        } else {
          displayChoice("IT'S A TIE", "👊", "👊", ++player1Score, ++player2Score);
        } 
        break;
      case 'scissor':
        if (player2Choice === 'paper') {
          displayChoice("PLAYER 1 WIN", "✌", "✋", ++player1Score, player2Score);
        } else if (player2Choice === 'rock') {
          displayChoice("PLAYER 2 WIN", "✌", "👊", player1Score, ++player2Score);
        } else {
          displayChoice("IT'S A TIE", "✌", "✌", ++player1Score, ++player2Score);
        }
        break;
      case 'paper':
        if (player2Choice === 'rock') {
          displayChoice("PLAYER 1 WIN", "✋", "👊", ++player1Score, player2Score);
        } else if (player2Choice === 'scissor') {
          displayChoice("PLAYER 2 WIN", "✋", "✌", player1Score, ++player2Score);
        } else {
          displayChoice("IT'S A TIE", "✋", "✋", ++player1Score, ++player2Score);
        }
        break;
    }
  }

  function goBack(reset) {
    if (reset === "reset") {
      displayChoice("SHOW YOUR HAND TO START THE GAME", "", "", 0, 0); 
      player1Score = 0;
      player2Score = 0;
    }
  }