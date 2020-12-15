'use strict';
let secnumber = Math.trunc(Math.random() * 25) + 1; //calculating secreat number;
let score = 20;
let Highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  //adding event listener on click button
  const guess = Number(document.querySelector('.guess').value); // value enter by user in input box
  if (score > 0) {
    //if null
    if (!guess) {
      document.querySelector('message').textContent = 'No number entered';
    } //if matched
    else if (guess === secnumber) {
      document.querySelector('.message').textContent = ' Correct number ';
      document.querySelector('.number').textContent = secnumber; // displaying secreat number on window
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';
      Highscore = Math.max(Highscore, score);
      document.querySelector('.highscore').textContent = Highscore;
    } //if not equal
    else if (guess !== secnumber) {
      document.querySelector('.message').textContent =
        guess > secnumber ? ' Higher Number' : 'Lower Number';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = ' ';
    }
  } else {
    document.querySelector('.message').textContent = ' You lost the game';
    document.querySelector('.guess').value = ' ';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secnumber = Math.trunc(Math.random() * 25) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing... ';
});
