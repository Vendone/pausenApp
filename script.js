const alarm = new Audio('./public/alarm.mp3');
let timerStarted = false;

//Quotes abrufen
fetch('https://fraze.it/api/famous/all/de/1/no/9d2f86c8-724c-40d2-b62f-bbf772df5b42').then(response => response.json())
  .then(data => console.log(data));

function startTimer() {
  if (!timerStarted) {
    const startTime = Date.now();
    const fifteenMinutes = 15 * 60 * 1000;
    const endTime = startTime + fifteenMinutes;

    setInterval(function() {
      let timeLeft = endTime - Date.now();
      if (timeLeft > 0) {
        let minutes = Math.floor(timeLeft / (1000 * 60));
        minutes = ('0' + minutes).slice(-2);
        let seconds = Math.round((timeLeft / 1000) % 60);
        seconds = ('0' + seconds).slice(-2);
        let text = minutes + ' : ' + seconds;
        timer.innerHTML = text;
        button.innerHTML = 'Stopp';
      } else {
        timer.innerHTML = '00 : 00';
        alarm.play();
      }
    }, 1000);
  }
  timerStarted = true;
}