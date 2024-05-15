let secretNumber = Math.floor(Math.random() * 10) + 1;
let remainingGuesses = 5;
let guessesHistory = [];
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Function to draw the ball on the canvas
function drawBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

// Function to draw the chart on the canvas
function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(20, canvas.height - 20);
  let spacing = (canvas.width - 40) / guessesHistory.length;
  for (let i = 0; i < guessesHistory.length; i++) {
    ctx.lineTo(20 + i * spacing, canvas.height - 20 - guessesHistory[i] * 20);
  }
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}

// Function to draw the ball at the top center of the canvas
function drawBall() {
  let x = canvas.width / 2;
  let y = 20;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

// Function to check the user's guess
function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  let resultElement = document.getElementById("result");

  if (guess === secretNumber) {
    resultElement.textContent = "Congratulations! You guessed it!";
    drawBall();
  } else {
    remainingGuesses--;
    if (remainingGuesses === 0) {
      resultElement.textContent = "Game over! The number was " + secretNumber;
    } else {
      resultElement.textContent = "Try again. You have " + remainingGuesses + " attempts left.";
      if (guess < secretNumber) {
        resultElement.textContent += " The secret number is higher.";
      } else {
        resultElement.textContent += " The secret number is lower.";
      }
    }
    guessesHistory.push(guess);
    drawChart();
  }
}
