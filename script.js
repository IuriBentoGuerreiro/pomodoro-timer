let minutes = 25; 
let seconds = 0;
let interval = null;

const modes = document.querySelectorAll('.mode button');

const times = {
    'pomodoro': 25,
    'break': 5
};

LoadTimer()

modes.forEach(button => {
    button.addEventListener('click', function () {
        modes.forEach(m => m.classList.remove('active'));
        this.classList.add('active');

        const mode = this.classList.contains('pomodoro') ? 'pomodoro' : 'break';
        minutes = times[mode];
        seconds = 0;

        pause();
        LoadTimer();
    });
});

function startTimer() {
    if (interval) return;

    interval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                pause();
                alert("Tempo esgotado!");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        LoadTimer();
    }, 1000);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function LoadTimer() {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        const tempoFormatado = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerElement.innerHTML = tempoFormatado;
        document.title = `${tempoFormatado} - Pomodoro`;
    }
}
