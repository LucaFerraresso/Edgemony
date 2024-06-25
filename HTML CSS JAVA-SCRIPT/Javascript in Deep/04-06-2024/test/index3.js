//ESERCIZIO 1: visualizza un time aiutandoti con....

//seleziono il mio container principale
const ourDiv = document.querySelector('.timer');
//creo un elemento paragrafo per visualizzare un timer
const ourTimer = document.createElement('p');
//console.log(ourTimer);
//definisco il contenuto del paragrafo

//utilizzo il metodo seiInterval per animare il timer

const firstTimer= setInterval(()=>{
    ourTimer.textContent=new Date;
    //stampo il contenuto ogni 1000ms
    console.log(ourTimer.textContent);
    return firstTimer;
},1000);

//creo due pulsanti per manipolare i timer
//start btn
const startBtn= document.createElement('button');
startBtn.className ='startBtn'
startBtn.textContent ='Start'
//stop btn
const stopBtn = document.createElement('button');
stopBtn.className ='stopBtn';
stopBtn.textContent ='Stop';

//aggiungo al bottone start  e al bottone stop un listener

startBtn.addEventListener('click',()=>{
    clearInterval(firstTimer);
    console.log('timer startato');
});

stopBtn.addEventListener('click',()=>{
    clearInterval(firstTimer);
    console.log('timer fermato');
    //a questo punto gli dovrei riassegnare l'id di partenza, 
    //ma cambia ogni volta che clicco o start o stop
})



//ESERCIZIO 2-3:

//voglio provare a fare un timer alternativo, comporto da tre timer
//creo 3 paragrafi per un timer alternativo
//prima pero' creo il secondo contenitore
const alternativeTimer= document.createElement('div');
alternativeTimer.className='secondClock';

//pulsante per startare il timer alternativo
const lastStartBtn= document.createElement('button');
lastStartBtn.className ='lastStartBtn'
lastStartBtn.textContent ='START';

//pulsante per azzerare il timer alternativo
const lastStopBtn= document.createElement('button');
lastStopBtn.className ='lastStopBtn';
lastStopBtn.textContent ='STOP';

//timer dei secondi
let number1 = 0;
const ourSeconds= setInterval(()=>{
    number1=++number1;
    secondsEl.textContent=`Sec:${number1}`;
    return ourSeconds
},1000);

//timer dei minuti
const secondsEl = document.createElement('p');
//definisco il contenuto del paragrafo
secondsEl.className = 'secondsEl';
secondsEl.textContent = `Sec:${number1}`;


let number2= 0;
const ourMinutes= setInterval(()=>{
    number2=++number2;
    minutesEl.textContent=`Min: ${number2}`;
    if (number2===60){
        clearInterval(ourMinutes);
    }
    return ourMinutes;
},60000);

const minutesEl = document.createElement('p');
//console.log(minutesEl);
minutesEl.className='minutesEl';
//definisco il contenuto del paragrafo
minutesEl.textContent = `Min: ${number2}`;
//console.log(minutesEl.textContent);

//timer delle ore
let number3= 0;
const ourHours= setInterval(()=>{
    number3=++number3;
    hoursEl.textContent = `Hours: ${number3}`;
    if (number3===24){
        clearInterval(ourHours);
    }
    return ourHours;
},3600000);


const hoursEl = document.createElement('p');
//console.log(hoursEl);
hoursEl.className ='hoursEl';
//definisco il contenuto del paragrafo
hoursEl.innerText = `Hours: ${number3}`;



//aggiungo al bottone lastStart  e al bottone lastStop un listener
lastStartBtn.addEventListener('click',()=>{
   console.log('timer startato');
})
lastStopBtn.addEventListener('click',()=>{
    clearInterval(ourSeconds);
    clearInterval(ourMinutes);
    clearInterval(ourHours);
    console.log('timer fermato');
})


//assemblo gli elementi html
ourDiv.appendChild(ourTimer);
ourDiv.insertAdjacentElement('afterbegin',startBtn);
ourDiv.insertAdjacentElement('beforeend',stopBtn);
alternativeTimer.appendChild(hoursEl);
alternativeTimer.appendChild(minutesEl);
alternativeTimer.appendChild(secondsEl);
alternativeTimer.insertAdjacentElement('afterbegin',lastStartBtn);
alternativeTimer.insertAdjacentElement('beforeend',lastStopBtn);

ourDiv.insertAdjacentElement('afterend',alternativeTimer);