let title = '';
if (typeof document !== 'undefined') {
  title = document.title;
}
console.log(title);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.third').textContent = '⛔ No Number ❗';
  } else if (guess === secretNumber) {
    document.querySelector('.third').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').classList.add('wide');
    document.querySelector('body').classList.add('bg');
    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.third').textContent = 'Too low 📉';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.third').textContent = '💥 Game Over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').classList.add('bg2');
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.third').textContent = 'Too High 📈';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.third').textContent = '💥 Game Over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').classList.add('bg2');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.third').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').classList.remove('bg');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').classList.remove('wide');
});
