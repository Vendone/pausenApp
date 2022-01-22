const alarm = new Audio('./public/alarm.mp3');
let timerStarted = false;

function startTimer() {
    window.stoppButton = document.getElementById('buttonStop');
    window.resetButton = document.getElementById('buttonReset');

    if (!timerStarted) {
        const startTime = Date.now();
        const fifteenMinutes = 15 * 60 * 1000;
        const endTime = startTime + fifteenMinutes;

        window.timerID = setInterval(function() {
            let timeLeft = endTime - Date.now();
            if (timeLeft > 0) {
                let minutes = Math.floor(timeLeft / (1000 * 60));
                minutes = ('0' + minutes).slice(-2);
                let seconds = Math.round((timeLeft / 1000) % 60);
                seconds = ('0' + seconds).slice(-2);
                let text = minutes + ' : ' + seconds;
                timer.innerHTML = text;
                button.style.visibility = "hidden";
                stoppButton.style.visibility = "visible";
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
    clearInterval(timerID);
    stoppButton.style.visibility = "hidden";
    resetButton.style.visibility = "visible";
}

function resetTimer() {
    timer.innerHTML = '15 : 00';
    button.style.visibility = "visible";
    resetButton.style.visibility = "hidden";
}