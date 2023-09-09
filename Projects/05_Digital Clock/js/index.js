let clockBox = document.getElementById("clock");

setInterval(() => {
    let nowDate = new Date();
    clockBox.innerHTML = nowDate.toLocaleTimeString();
}, 1000);