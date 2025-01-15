window.onload = function() {
    setTimeout(function() {
        const image = document.getElementById('fadeImage');
        const sound = document.getElementById('fadeSound');
        image.style.opacity = 1;
        sound.play();
    }, 3000); // 3000 milliseconds = 3 seconds
};