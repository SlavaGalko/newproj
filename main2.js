let button_start = document.querySelector(".button_start");

let minutesCounter = document.querySelector(".minutes");
let secoundsCounter = document.querySelector(".secounds");

button_start.addEventListener("click", buttonStartTimer);

let minutes = 9;
let secounds = 60;
let timerId;
let counter = 0;

let audio = new Audio("./sound/sound.mp3");
let audio3 = new Audio("./sound/sound3.mp3");

let startStop = false;

function buttonStartTimer() {
  if (!startStop) {
    startStop = true;

    audio3.play();

    timerId = setInterval(function () {
      secounds--;

      minutesCounter.innerText = minutes;
      secoundsCounter.innerText = secounds;
      if (secounds == 0 && minutes != 0) {
        secounds = 60;
        minutes--;
      } else if (minutes == 0 && secounds == 0) {
        audio.play();
        clearInterval(timerId);
        startStop = false;
        minutes = 9;
        secounds = 60;
        minutesCounter.innerText = 10;
        secoundsCounter.innerText = "00";
      }
    }, 1000);
  } else {
    audio3.play();
    clearInterval(timerId);
    startStop = false;
  }
}
