let startTime;
let running = false;
let interval;

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = Date.now() - (interval || 0);
        interval = setInterval(updateStopwatch, 10);
    }
}

function pauseStopwatch() {
    running = false;
    clearInterval(interval);
}

function resetStopwatch() {
    running = false;
    clearInterval(interval);
    document.getElementById("display").innerHTML = "00:00:00.00";
    interval = null;
}

function updateStopwatch() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const formattedTime = elapsedTime.toISOString().substr(11, 11);
    document.getElementById("display").innerHTML = formattedTime;
}

function recordLap() {
    const lapTime = document.getElementById("display").innerHTML;
    const lapList = document.getElementById("lapTimes");
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(lapTime));
    lapList.appendChild(listItem);
}
