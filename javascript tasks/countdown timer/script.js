const timerElement = document.getElementById('timer');
let btnStart = document.getElementById('startButton');
btnStart.addEventListener('click', () => {
    timeLeft = document.getElementById('timeInput').value;      
    startTimer();
    document.getElementById('timeInput').value= "";
});

function startTimer() {
const timerId = setInterval(() => {
    timeLeft--;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 10) {
        timerElement.style.color = '#ff9800';
        timerElement.style.borderColor = '#ff9800';
    }

    if (timeLeft <= 0) { 
        clearInterval(timerId);
        timerElement.textContent = 'Time\'s Up!';
        timerElement.classList.add('time-up');
    }
}, 1000);
}