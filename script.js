'use strict';
const secnumber = Math.trunc(Math.random() * 25) + 1; //calculating secreat number;
let score = 20;
//document.querySelector('.number').textContent = secnumber; // displaying secreat number on window

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
    } //if greater
    else if (guess > secnumber) {
      document.querySelector('.message').textContent = ' Higher Number';
      score--;
      document.querySelector('.score').textContent = score;
      //   document.querySelector('.number').style.backgroundColor = '#ff0000';
    } //if lower
    else if (guess < secnumber) {
      document.querySelector('.message').textContent = ' Lower Number';
      score--;
      document.querySelector('.score').textContent = score;
      //   document.querySelector('.number').style.backgroundColor = '#ff0000';
    }
  } else {
    document.querySelector('.message').textContent = ' You lost the game';
  }
});
