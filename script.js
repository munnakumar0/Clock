function show_clock() {

    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];


    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * second}deg)`;


    let sound = new Audio('alarm-clock-ticking-6069.mp3');
    sound.play();

}
setInterval(show_clock, 1000);