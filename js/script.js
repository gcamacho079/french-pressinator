/*$(document).ready(function() {
  var timeTotal = 60; // In seconds
  var minutes;
  var seconds;
  var end = 0;
  var timeRemaining = "";

  var waterTimer = setInterval(waterCooler, 1000);

  /*********************************************************
   Timer for Cooling Boiled Water
   - Begins when user pushes button
   - After timer stops, prompts user to begin pouring water into press
  *********************************************************

  function waterCooler() {

    if (timeTotal >= 0) {
      stringifyTime();
      console.log(timeRemaining);
      timeTotal--;
    }
    else {
      clearInterval(waterTimer);
      console.log("Your water is now at the optimal temperature.");
      timeTotal = 240;
      var coffeeTimer =  setInterval(function() {
        if (timeTotal >= 0) {
          stringifyTime();
          console.log(timeRemaining);
          timeTotal--;
        }
        else {
          console.log("Your coffee is ready! Now push the plunger down slowly...");
          clearInterval(coffeeTimer);
        }
      }, 1000);
    }
  }

  /*********************************************************
   Timer for Brewing Coffee
   - Begins when user pushes button
   - Prompts stir 30 seconds into brew
  *********************************************************/

  //function brewClock() {


  //}

  /*********************************************************
   Time Formatters
  *********************************************************

  function stringifyTime() {
    if (timeTotal < 60) {
      minutes = "00";
      seconds = timeTotal;
      secondFormatter();
    }
    else {
      minuteFormatter();
    }
    timeRemaining = minutes + ":" + seconds;
  }

  function minuteFormatter() {
    minutes = Math.floor(timeTotal/60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    seconds = timeTotal - (minutes * 60);
    secondFormatter();
  }

  function secondFormatter() {
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  }

})*/

var timeTotal = 60; // Unit (s)
var minutes;
var seconds;
var end = 0;
var timeRemaining = "";

var frenchPress = {
  onReady: function() {
    $("#startTimer").click(frenchPress.waterCooler);
  },

  /*********************************************************
   Water and Coffee Timers
  *********************************************************/

  waterCooler: function() {
    var waterTimer = setInterval(function() {
      if (timeTotal >= 0) {
        frenchPress.stringifyTime();
        console.log(timeRemaining);
        timeTotal--;
      }
      else {
        console.log("Your water is now at the optimal temperature.");
        clearInterval(waterTimer);
      }
    }, 1000);
  },

  /*********************************************************
   Time Formatters
  *********************************************************/

  stringifyTime: function() {
    if (timeTotal < 60) {
      minutes = "00";
      seconds = timeTotal;
      frenchPress.secondFormatter();
    }
    else {
      frenchPress.minuteFormatter();
    }
    timeRemaining = minutes + ":" + seconds;
  },


  minuteFormatter: function() {
    minutes = Math.floor(timeTotal/60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    seconds = timeTotal - (minutes * 60);
    frenchPress.secondFormatter();
  },


  secondFormatter: function() {
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  }
};

$(document).ready(frenchPress.onReady);
