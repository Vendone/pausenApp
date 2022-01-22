const alarm = new Audio('./public/alarm.mp3');
let timerStarted = false;


function startTimer() {
  buttonStop.visibility = "hidden";
  if (!timerStarted) {
    const startTime = Date.now();
    const fifteenMinutes = 15 * 60 * 1000;
    const endTime = startTime + fifteenMinutes;

    let interval = setInterval(function() {
      let timeLeft = endTime - Date.now();
      if (timeLeft > 0) {
        let minutes = Math.floor(timeLeft / (1000 * 60));
        minutes = ('0' + minutes).slice(-2);
        let seconds = Math.round((timeLeft / 1000) % 60);
        seconds = ('0' + seconds).slice(-2);
        let text = minutes + ' : ' + seconds;
        timer.innerHTML = text;
        button.visibility = "hidden";
        buttonStop.visibility ="visible";
      } else {
        timer.innerHTML = '00 : 00';
        alarm.play();
      }
    }, 1000);

    interval()
  }
  timerStarted = true;
}

function timerStop() {
  clearInterval(interval);
}