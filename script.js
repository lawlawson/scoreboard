let count = 0;
let countScoreHome = document.getElementById('home-score');
let countScoreGuest = document.getElementById('guest-score');

function plusOneHome() {
  count += 1;
  countScoreHome.textContent = count;
}

function plusTwoHome() {
  count += 2;
  countScoreHome.textContent = count;
}

function plusThreeHome() {
  count += 3;
  countScoreHome.textContent = count;
}

function plusOneGuest() {
  count += 1;
  countScoreGuest.textContent = count;
}

function plusTwoGuest() {
  count += 2;
  countScoreGuest.textContent = count;
}

function plusThreeGuest() {
  count += 3;
  countScoreGuest.textContent = count;
}
