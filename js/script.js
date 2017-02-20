console.log("IT'S ALIVE!");

var timeTotal = 240; // In seconds
var minutes;
var seconds;
var end = 0;
var timeRemaining = "";

var timer =  setInterval(brewClock, 1000);

function brewClock() {
  if (timeTotal >= 0) {
    stringifyTime();
    console.log(timeRemaining);
    if (timeTotal == 0) {
      console.log("Your coffee is ready! Now push the plunger down slowly...");
    }
    timeTotal--;
  }
}

function stringifyTime() {
  if (timeTotal < 10) {
    seconds = "0" + timeTotal;
  }
  else if (timeTotal >= 10 && timeTotal < 60 ) {
    seconds = timeTotal;
  }
  else {
    minuteFormatter();
  }
  timeRemaining = minutes + ":" + seconds;
}

function minuteFormatter() {

}
