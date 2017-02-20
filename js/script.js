console.log("IT'S ALIVE!");

var timer =  setInterval(brewClock, 1000);
var totalSeconds = 10;
var hours;
var minutes;
var seconds;
var timeRemaining = "";


function brewClock() {
  if (totalSeconds > 0) {
    timeFormatter();
    console.log(timeRemaining);
    totalSeconds--;
  }
  else {
    console.log("Your coffee is ready!");
    clearInterval(brewClock);
  }
}

function timeFormatter() {
  seconds = totalSeconds;
  timeRemaining = hours + ":" + minutes + ":" + seconds;
}

function overSixty() {

}
