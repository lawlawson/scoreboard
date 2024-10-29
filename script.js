let homeCount = 0;
let guestCount = 0;
let countScoreHome = document.getElementById('home-score');
let countScoreGuest = document.getElementById('guest-score');

function plusOneHome() {
  homeCount += 1;
  countScoreHome.textContent = homeCount;
}

function plusTwoHome() {
  homeCount += 2;
  countScoreHome.textContent = homeCount;
}

function plusThreeHome() {
  homeCount += 3;
  countScoreHome.textContent = homeCount;
}

function plusOneGuest() {
  guestCount += 1;
  countScoreGuest.textContent = guestCount;
}

function plusTwoGuest() {
  guestCount += 2;
  countScoreGuest.textContent = guestCount;
}

function plusThreeGuest() {
  guestCount += 3;
  countScoreGuest.textContent = guestCount;
}
