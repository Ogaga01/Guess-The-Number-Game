let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess > 20) {
    document.querySelector('.third').textContent = 'Not A Valid Number ❗';
  } else if (guess === secretNumber) {
    document.querySelector('.third').textContent = 'Correct Number 🎉';
    document.querySelector('body').classList.add('bg');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').classList.add('wide');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.third').textContent = 'Too High 📈';
    } else {
      document.querySelector('.third').textContent = '💥 Game Over ❗';
      document.querySelector('body').classList.add('bg2');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.third').textContent = 'Too Low 📉';
    } else {
      document.querySelector('.third').textContent = '💥 Game Over ❗';
      document.querySelector('body').classList.add('bg2');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.third').textContent = 'Start Guessing...';
  document.querySelector('body').classList.remove('bg');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').classList.remove('wide');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});