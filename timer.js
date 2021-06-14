// Assigning to variables stable elements
const timer = document.querySelector("#timer"),
  button10M = document.querySelector("#ten-m"),
  button5M = document.querySelector("#five-m"),
  button1M = document.querySelector("#one-m"),
  button10s = document.querySelector("#ten-s"),
  resetButton = document.querySelector("#reset"),
  startButton = document.querySelector("#start"),
  pageTitle = document.querySelector("#title"),
  TEN_MINS = 600,
  FIVE_MINS = 300,
  ONE_MIN = 60,
  TEN_SECS = 10;

let counter = 0;
let timeLeft = 0;
let interval;
let isRunning = false;

// Initalize the timer to 00:00:00
timer.innerHTML = convertSeconds(timeLeft - counter);

// When a button is cicked, add the appropriate time and update the timer text.
button10M.addEventListener("click", () => {
  timeLeft += TEN_MINS;
  timer.innerHTML = convertSeconds(timeLeft - counter);
});
button5M.addEventListener("click", () => {
  timeLeft += FIVE_MINS;
  timer.innerHTML = convertSeconds(timeLeft - counter);
});
button1M.addEventListener("click", () => {
  timeLeft += ONE_MIN;
  timer.innerHTML = convertSeconds(timeLeft - counter);
});
button10s.addEventListener("click", () => {
  timeLeft += TEN_SECS;
  timer.innerHTML = convertSeconds(timeLeft - counter);
});
resetButton.addEventListener("click", reset);
startButton.addEventListener("click", start);

// All the functions
function convertSeconds(s) {
  const hours = Math.floor(s / 60 / 60);
  const minutes = Math.floor(s / 60) - hours * 60;
  const seconds = s % 60;
  return format(hours) + ":" + format(minutes) + ":" + format(seconds);
}
function format(number) {
  return (number < 10 ? "0" : "") + number;
}
function countDown() {
  counter++;
  timer.innerHTML = convertSeconds(timeLeft - counter);
  pageTitle.innerHTML =
    convertSeconds(timeLeft - counter) + " - Let's Get Busy!";
  if (counter === timeLeft) {
    reset();
  }
}
function reset() {
  timeLeft = 0;
  counter = 0;
  timer.innerHTML = "00:00:00";
  pageTitle.innerHTML = "Pomodoro";
  clearInterval(interval);
  isRunning = false;
}
function start() {
  if (counter === timeLeft) {
    reset();
  } else if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  } else {
    interval = setInterval(countDown, 1000);
    isRunning = true;
  }
}
