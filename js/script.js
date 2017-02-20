console.log("IT'S ALIVE!");

var timer =  setInterval(brewClock, 1000);
var timeInSeconds = 240;
var hours;
var minutes;
var seconds;
var timeString = "";

function brewClock() {
  minutes = timeInSeconds/60;
  timeString = hours + ":" + minutes + ":" + seconds
  console.log(timeString);
  timeInSeconds--;
}
