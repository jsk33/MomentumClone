const clockContainer = document.querySelector(".clock-js");
const clock = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // replace the clock content, 00:00, with the current time
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    console.log("clock.js running")
    getTime();
    setInterval(getTime, 1000);
}

init();