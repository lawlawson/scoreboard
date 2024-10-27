let count = 0;
let countScore = document.getElementById('home-score');

function plusOneHome() {
  count += 1;
  countScore.textContent = count;
}

function plusTwoHome() {
  count += 2;
  countScore.textContent = count;
}

function plusThreeHome() {
  count += 3;
  countScore.textContent = count;
}

function plusOneGuest() {
  count += 1;
  countScore.textContent = count;
}

function plusTwoGuest() {
  count += 2;
  countScore.textContent = count;
}

function plusThreeGuest() {
  count += 3;
  countScore.textContent = count;
}
