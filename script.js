'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1)
console.log(secretNumber)
let score = 20

let highScore = 0

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        document.querySelector('.third').textContent = '⛔ No Number ❗'
    } else if (guess === secretNumber) {
        document.querySelector(".third").textContent = "🎉 Correct Number";
        document.querySelector('body').classList.add('bg')
        if (score > highScore) {
            highScore = score

            document.querySelector(".highscore").textContent = highScore
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".third").textContent = "Too low 📉";
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector(".third").textContent = "💥 Game Over";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").classList.add("bg2");
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
          document.querySelector(".third").textContent = "Too High 📈";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".third").textContent = "💥 Game Over";
          document.querySelector(".score").textContent = 0;
          document.querySelector("body").classList.add("bg2");
        }
    }
})