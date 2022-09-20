let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

function displayMessage(message) {
  document.querySelector(".third").textContent = message;
}

const body = document.querySelector("body");

const number = document.querySelector(".number");

const classScore = document.querySelector(".score");

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess || guess > 20) {
    displayMessage("Not A Valid Number ❗");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number 🎉");
    body.classList.add("bg");
    number.textContent = secretNumber;
    number.classList.add("wide");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score -= 1;
      classScore.textContent = score;
      displayMessage(guess > secretNumber ? "Too High 📈" : "Too Low 📉");
    } else {
      displayMessage("💥 Game Over ❗");
      body.classList.add("bg2");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage("Start Guessing...");
  body.classList.remove("bg");
  classScore.textContent = score;
  number.classList.remove("wide");
  number.textContent = "?";
  document.querySelector(".guess").value = "";
});
