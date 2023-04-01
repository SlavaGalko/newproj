let button_start = document.querySelector(".button_start");
let btn_start = document.querySelector(".btn_start");
let minutesCounter = document.querySelector(".minutes");
let secoundsCounter = document.querySelector(".secounds");

let btn_skip = document.querySelector(".btn_skip");


// new

let modal = document.querySelector('#myModal');
let btn = document.querySelector('#myBtn');
let span = document.querySelector('.close');

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// new

btn_start.addEventListener("click", buttonStartTimer);

let minutes = 59;
let secounds = 60;
let timerId;
let counter = 0;

let audio = new Audio("./sound/sound.mp3");
let audio3 = new Audio("./sound/sound5.mp3");

let startStop = false;

function buttonStartTimer() {
  if (!startStop) {
    startStop = true;
    btn_start.innerText = `pause`;

    //new
    btn_skip.classList.remove("hide");

    btn_skip.addEventListener("click", function () {
      startStop = false;
      minutes = 59;
      secounds = 60;
      clearInterval(timerId);
      minutesCounter.innerText = "60";
      secoundsCounter.innerText = "00";

      btn_skip.classList.add("hide");
      btn_start.innerText = `START`;
      document.title = `Pomodoro Focus`;
    });
    //new

    audio3.play();

    timerId = setInterval(function () {
      secounds--;
      // document.title = `${minutes}:${secounds} - Time to focus!`;

      // test
      if (secounds < 10) {
        document.title = `${minutes}:0${secounds} - Time to focus!`;
        secoundsCounter.innerText = `0${secounds}`;
      } else {
        minutesCounter.innerText = minutes;
        secoundsCounter.innerText = secounds;
        document.title = `${minutes}:${secounds} - Time to focus!`;
      }
      // test

      // minutesCounter.innerText = minutes;
      // secoundsCounter.innerText = secounds;

      if (secounds == 0 && minutes != 0) {
        secounds = 60;
        minutes--;
      } else if (minutes == 0 && secounds == 0) {
        audio.play();
        clearInterval(timerId);
        startStop = false;
        minutes = 59;
        secounds = 60;
        minutesCounter.innerText = 60;
        secoundsCounter.innerText = "00";
        btn_start.innerText = `START`;
        btn_skip.classList.add("hide");
        document.title = `Pomodoro Focus`;

      }
    }, 1000);
  } else {
    audio3.play();
    clearInterval(timerId);
    startStop = false;
    btn_start.innerText = `START`;

    //new
    btn_skip.classList.add("hide");
    //new
  }
}
