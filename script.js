const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const hintDisplay = document.getElementById("hintDisplay");
const hintText = document.getElementById("hintText");
const attemptCount = document.getElementById("attemptCount");
const statusText = document.getElementById("statusText");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

let secretNumber;
let attempts;
let finished;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  finished = false;
  attemptCount.textContent = "0";
  hintDisplay.textContent = "?";
  hintText.textContent = "I'm thinking of a number between 1 and 100.";
  statusText.textContent = "GAME READY";
  message.textContent = "";
  input.value = "";
  input.disabled = false;
  document.getElementById("guessButton").disabled = false;
  input.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (finished) return;

  const guess = Number(input.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    message.textContent = "Enter a whole number from 1 to 100.";
    message.style.color = "#ff7c7c";
    return;
  }

  attempts++;
  attemptCount.textContent = attempts;
  message.style.color = "";

  if (guess > secretNumber) {
    hintDisplay.textContent = "↓";
    hintText.textContent = "Lower number please.";
    statusText.textContent = "TOO HIGH";
  } else if (guess < secretNumber) {
    hintDisplay.textContent = "↑";
    hintText.textContent = "Higher number please.";
    statusText.textContent = "TOO LOW";
  } else {
    hintDisplay.textContent = secretNumber;
    hintText.textContent = `Congratulations! You found it in ${attempts} attempt${attempts === 1 ? "" : "s"}.`;
    statusText.textContent = "YOU GOT IT";
    message.textContent = "Nice work. Start a new game and try to beat your score.";
    finished = true;
    input.disabled = true;
    document.getElementById("guessButton").disabled = true;
  }

  input.select();
});

resetButton.addEventListener("click", startGame);
startGame();
