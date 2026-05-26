let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let mode = document.getElementById("mode");

let min = 0;
let sec = 0;
let timer;

display.textContent = `${min}:00`;
is_running = false;

mode.addEventListener("change", () => {
    clearInterval(timer);
    is_running = false;
    min = Number(mode.value);
    sec = 0;
    display.textContent = `${min}:00`
})

function startTimer() {
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    display.textContent = `${m}:${s}`;
}

start.addEventListener("click", () => {
    if (min == 0) {
        alert("please choose a timer option");
        return;
    }
    if (is_running) {
        return;
    }
    else {
        is_running = true;
    }
    timer = setInterval(() => {
        if (sec == 0) {
            min--;
            sec = 60;
        }
        sec--;
        startTimer();
        if (min == 0 && sec == 0) {
            clearInterval(timer);
            is_running = false;
            min = Number(mode.value);;
            sec = 0;
            display.textContent = `${min}:00`;
        }
    }, 1000);

});

stop.addEventListener("click", () => {
    clearInterval(timer);
    is_running = false;
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    is_running = false;
    min = Number(mode.value);
    sec = 0;
    display.textContent = `${min}:00`;
});