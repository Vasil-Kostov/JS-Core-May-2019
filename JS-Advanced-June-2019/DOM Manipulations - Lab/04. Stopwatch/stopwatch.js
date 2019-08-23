function stopwatch() {
    const timeDivEle = document.getElementById("time");
    const startButton = document.getElementById("startBtn");
    const stopButton = document.getElementById("stopBtn");

    startButton.addEventListener("click", start);
    stopButton.addEventListener("click", stop);

    let seconds = 0;
    let minutes = 0;
    let counter;

    function start() {
        timeDivEle.textContent = "00:00";
        startButton.disabled = true;
        stopButton.disabled = false;

        seconds = 0;
        minutes = 0;
        counter = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            let formatedMins = minutes < 10 ? `0${minutes}` : minutes;
            let formatedSecs = seconds < 10 ? `0${seconds}` : seconds;
            timeDivEle.textContent = `${formatedMins}:${formatedSecs}`;
        }, 1000);
    }

    function stop() {
        clearInterval(counter);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}