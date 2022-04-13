const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const millseconds = document.querySelector('#milliseconds');

let min = 0;
let sec = 0;
let millisec = 0;
let timer = false;
let status = false;

function stopWatch() {
    millisec++;
    if (millisec == 100) {
        sec++;
        millisec = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0;
        millisec = 0;
    }
    if (min < 10) {
        minutes.innerHTML = "0" + min;
    } else {
        minutes.innerHTML = min;
    }
    if (sec < 10) {
        seconds.innerHTML = "0" + sec;
    } else {
        seconds.innerHTML = sec;
    }
    if (millisec < 10) {
        millseconds.innerHTML = "0" + millisec;
    } else {
        millseconds.innerHTML = millisec;
    }
}


function startStop() {
    if (status == false) {
        timer = setInterval(() => {
            stopWatch();
        }, 10);
        start.innerHTML = '<i class="fas fa-pause"></i>';
        status = true;
    } else {
        clearInterval(timer);
        start.innerHTML = '<i class="fas fa-play"></i>';
        status = false;
    }
}

function resetTimer() {
    setInterval(timer);
    min = 0;
    sec = 0;
    millisec = 0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliseconds.innerHTML = "00";
}

start.addEventListener('click', startStop);
reset.addEventListener('click', resetTimer);