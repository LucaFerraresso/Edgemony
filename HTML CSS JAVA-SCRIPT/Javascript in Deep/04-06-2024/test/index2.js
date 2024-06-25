// Seleziono il mio container principale
const ourDiv = document.querySelector('.timer');
// Creo un elemento paragrafo per visualizzare un timer
const ourTimer = document.createElement('p');
// Aggiungo il paragrafo al container
ourDiv.appendChild(ourTimer);

// Timer principale
let mainTimerId;

// Funzione per avviare il timer principale
function startMainTimer() {
    if (mainTimerId !== undefined) {
        console.log('Il timer principale è già avviato.');
        return;
    }
    mainTimerId = setInterval(() => {
        ourTimer.textContent = new Date();
        console.log(ourTimer.textContent);
    }, 1000);
    console.log('Timer principale avviato.');
}

// Funzione per fermare il timer principale
function stopMainTimer() {
    if (mainTimerId !== undefined) {
        clearInterval(mainTimerId);
        mainTimerId = undefined;
        console.log('Timer principale fermato.');
    }
}

// Creo i pulsanti per manipolare il timer principale
const startBtn = document.createElement('button');
startBtn.className = 'startBtn';
startBtn.textContent = 'Start';

const stopBtn = document.createElement('button');
stopBtn.className = 'stopBtn';
stopBtn.textContent = 'Stop';

// Aggiungo i listener ai pulsanti del timer principale
startBtn.addEventListener('click', startMainTimer);
stopBtn.addEventListener('click', stopMainTimer);

// Aggiungo i pulsanti al container
ourDiv.insertAdjacentElement('afterbegin', startBtn);
ourDiv.insertAdjacentElement('beforeend', stopBtn);

// Creazione del secondo timer composto da tre timer
const alternativeTimer = document.createElement('div');
alternativeTimer.className = 'secondClock';

// Timer secondi
let seconds = 0;
let secondsTimerId;

// Timer minuti
let minutes = 0;
let minutesTimerId;

// Timer ore
let hours = 0;
let hoursTimerId;

// Elementi per visualizzare i timer
const secondsEl = document.createElement('p');
secondsEl.className = 'secondsEl';
secondsEl.textContent = `Sec: ${seconds}`;

const minutesEl = document.createElement('p');
minutesEl.className = 'minutesEl';
minutesEl.textContent = `Min: ${minutes}`;

const hoursEl = document.createElement('p');
hoursEl.className = 'hoursEl';
hoursEl.textContent = `Hours: ${hours}`;

// Funzione per avviare il timer alternativo
function startAlternativeTimer() {
    if (secondsTimerId === undefined) {
        secondsTimerId = setInterval(() => {
            seconds++;
            secondsEl.textContent = `Sec: ${seconds}`;
            console.log(secondsEl.textContent);
        }, 1000);
    }
    if (minutesTimerId === undefined) {
        minutesTimerId = setInterval(() => {
            minutes++;
            minutesEl.textContent = `Min: ${minutes}`;
            if (minutes === 60) {
                clearInterval(minutesTimerId);
                minutesTimerId = undefined;
            }
            console.log(minutesEl.textContent);
        }, 60000);
    }
    if (hoursTimerId === undefined) {
        hoursTimerId = setInterval(() => {
            hours++;
            hoursEl.textContent = `Hours: ${hours}`;
            if (hours === 24) {
                clearInterval(hoursTimerId);
                hoursTimerId = undefined;
            }
            console.log(hoursEl.textContent);
        }, 3600000);
    }
    console.log('Timer alternativo avviato.');
}

// Funzione per fermare il timer alternativo
function stopAlternativeTimer() {
    if (secondsTimerId !== undefined) {
        clearInterval(secondsTimerId);
        secondsTimerId = undefined;
    }
    if (minutesTimerId !== undefined) {
        clearInterval(minutesTimerId);
        minutesTimerId = undefined;
    }
    if (hoursTimerId !== undefined) {
        clearInterval(hoursTimerId);
        hoursTimerId = undefined;
    }
    console.log('Timer alternativo fermato.');
}

// Pulsanti per avviare e fermare il timer alternativo
const lastStartBtn = document.createElement('button');
lastStartBtn.className = 'lastStartBtn';
lastStartBtn.textContent = 'START';

const lastStopBtn = document.createElement('button');
lastStopBtn.className = 'lastStopBtn';
lastStopBtn.textContent = 'STOP';

// Aggiungo i listener ai pulsanti del timer alternativo
lastStartBtn.addEventListener('click', startAlternativeTimer);
lastStopBtn.addEventListener('click', stopAlternativeTimer);

// Assemblo gli elementi del timer alternativo
alternativeTimer.appendChild(hoursEl);
alternativeTimer.appendChild(minutesEl);
alternativeTimer.appendChild(secondsEl);
alternativeTimer.insertAdjacentElement('afterbegin', lastStartBtn);
alternativeTimer.insertAdjacentElement('beforeend', lastStopBtn);

// Aggiungo il secondo timer al container principale
ourDiv.insertAdjacentElement('afterend', alternativeTimer);