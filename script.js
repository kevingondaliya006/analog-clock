
setInterval(show_clock, 1000);
function updateBackground(weatherCondition) {
    const body = document.body;
    if (weatherCondition === 'Clear') {
        body.style.background = 'linear-gradient(90deg, #00FFFF 0%, #00FF00 100%)';
    } else if (weatherCondition === 'Clouds') {
        body.style.background = 'linear-gradient(90deg, #999999 0%, #666666 100%)';
    } else if (weatherCondition === 'Rain') {
        body.style.background = 'linear-gradient(90deg, #808080 0%, #0000FF 100%)';
    } // Add more conditions as needed
}
function show_clock() {
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];
    
    let date = new Date();
   
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    h.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    
    let sound = document.getElementById('sound');
    updateBackground('Clear');
function playSound() {
    sound.play();
}

let playButton = document.getElementById('playButton');
playButton.addEventListener('click', playSound);

}
let stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', function() {
    let sound = document.getElementById('sound');
    sound.pause();  // Pause the sound
    sound.currentTime = 0;  // Reset the audio to the beginning
});


let intervalId = setInterval(show_clock, 1000);

// Clear the interval when the page is unloaded
window.addEventListener('unload', () => {
    clearInterval(intervalId);
});
