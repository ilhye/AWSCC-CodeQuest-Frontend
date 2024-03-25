const input = document.getElementById("number-inpt");
const result = document.getElementById("result");
const toGuess = document.getElementById("randNumber");
const guessBtn = document.getElementById("guess-btn");
const resetBtn = document.getElementById("reset-btn");
const feedback = document.querySelector(".valid-feedback");
const randContainer = document.querySelector(".rand-container");
const score = document.getElementById("score");
const life = document.getElementById("life");
let scoreCount = 0,
  lifeCount = 3;

function updateDisplay(
  message,
  color,
  bgColor,
  fbMessage,
  feedbackColor,
  borderColor
) {
  result.innerHTML = message;
  result.style.color = color;
  randContainer.style.backgroundColor = bgColor;
  feedback.innerHTML = fbMessage;
  feedback.style.color = feedbackColor;
  feedback.style.borderColor = borderColor;
}

// Guess number
guessBtn.addEventListener("click", function (play) {
  event.preventDefault();

  const randNum = Math.floor(Math.random() * 100) + 1;

  if (lifeCount === 0) {
    alert("No Remaining Life Left");
  }

  if (lifeCount > 0 && input.value > -1 && input.value !== "") {
    toGuess.innerHTML = randNum;

    if (parseInt(input.value) === randNum) {
      score.innerHTML = ++scoreCount;
      updateDisplay("CORRECT", "#3a5a40", "#3a5a40", "", "green", "green");
    } else {
      life.innerHTML = --lifeCount;
      const feedback =
        input.value > randNum
          ? "Guess is greater than " + randNum
          : "Guess is less than " + randNum;
      updateDisplay("WRONG GUESS", "#BF3131", "#BF3131", feedback);
    }
    if (lifeCount <= 2) {
      document.querySelector(".life-board").style.color = "#BF3131";
    }
  }
});

// Reset
resetBtn.addEventListener("click", function (reset) {
  updateDisplay("", "", "#F72798", "", "", "");
  toGuess.innerHTML = "?";
  input.value = "";
  input.style.borderColor = "";
  input.style.boxShadow = "";
  life.innerHTML = "3";
  score.innerHTML = "0";
  lifeCount = 3;
  document.querySelector(".life-board").style.color = "";
});
