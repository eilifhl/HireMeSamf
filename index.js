var i = 0;
var txt = 'Hire me, Samf'; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hireMeHeader").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
