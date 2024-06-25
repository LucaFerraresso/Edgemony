const ourContainer=document.querySelector('.div-ascoltatore');
ourContainer.addEventListener('click',(event)=>{
    const eventTarget=event.target;
    //console.log('hai premuto nel div');
    //console.log(event);
    //console.log(ourContainer);
    //quando premo nel div,in console visualizzo il target del click
    //riesco a distinguere l'origine del click attraverso la proprieta' target
    //target indica l'origine da cui e' scaturito l'evento 
    //console.log(event.target);
    //Console.log(event.target.tagName);
    //console.log(event.target.className);
    if (eventTarget.tagName==='BUTTON' && eventTarget.className==='button-one'){
        console.log('hai premuto il BOTTONE UNO');
        return;
    }
    if(eventTarget.tagName==='BUTTON'){
        console.log('hai premuto il BOTTONE DUE');
        return;
    }else{
        console.log('hai premuto il DIV CONTENITORE ');
    }
})

//creo i miei elementi con il DOM
const buttonOne=document.createElement('button');
buttonOne.className='button-one';
buttonOne.textContent='BUTTON_1';
//buttonOne.addEventListener('click',()=>{
//    console.log('hai cliccato sul BUTTON_1');
//});

const buttonTwo=document.createElement('button');
buttonTwo.className='button-two';
buttonTwo.textContent='BUTTON_2'
//buttonTwo.addEventListener('click',()=>{
//    console.log('hai cliccato sul BUTTON_2');
//});

//assemblo la mia pagina :)
ourContainer.append(buttonOne,buttonTwo);

//Esercizio 2: global function
//CREO UNA GLOBAL FUNCTION, riutilizzabile con ogni tipo di oggetto
//utilizzo l'elemento class, e' una "funzione" e posso utilizzarla in piu' occasinioni
class carCreator{
    constructor(color,doors,brand){
        this.color=color;
        this.doors=doors;
        this.brand=brand;
        this.writeCarInfo= function(){
            return `il mio auto è di colore ${this.color} ,ha ${this.doors} porte ed e' una ${this.brand}`;
        }
    }
}

//definisco ford per generare il suo oggetto corrispettivo
const ford=new carCreator('black',4,'Ford');
//console.log(ford);
//ford e' un oggetto, il nostro class genera oggetti.
console.log(ford.writeCarInfo());
//stampo in console la funzione che mi mette per iscritto le proprieta' dell'oggetto
//il class carCreator risulterebbe undefined ,se non gli diamo un oggetto da 'generare'

//in soldoni,anche se non e' corretto, il 'this' utilizzato dentro class prende il contesto di ford nel momento in
//cui lo definiamo con const ford= new carCreator();
//quasta 'funzione/class' la posso utilizzare per generare un numero illimitato di oggetti
//il this eredita da ogni oggetto, quindi se creo un oggetto con un this diverso da this, il this
//utilizzato dentro la funzione createTheCar() sarà diverso.

const pandino = new carCreator('white', 3, 'FIAT');
//console.log(pandino);
console.log(pandino.writeCarInfo());
//il this ha acquisito il contesto di pandino

//ESERCIZIO 2.5:
//posso ottenere lo stesso risultato utilizzando una funzione vera e propria. senza l'utilizzo di class
function createTheCar (color, doors, brand) {
    this.color = color;
    this.doors = doors;
    this.brand = brand;
    this.writeCarInfo = function(){
            return `il mio auto è di colore ${this.color} ,ha ${this.doors} porte ed e' una ${this.brand}`;
        }
    }

const Ferrari = new createTheCar('red', 2, 'Ferrari');
//console.log(Ferrari);//oggetto Ferrari
console.log(Ferrari.writeCarInfo());//funzione writeCarInfo()

//ESERCIZIO 3.MODALE, CON TRE BOTTONI AL SUO INTERNO , SI,NO,CHIUDI...

//DEFINIAMO ANCHE UN SET TIMEOUT PER CHIUDERE LA MODALE I AUTOMATICO DOPO 5000MS
//AGGIUNGO ANCHE UN TIMER VICINO CHE MI FACCIA VEDERE I 5 SECONDI SCORRERE
//QUINDI ALL'APERTURA DELLA MODALE,PARTIRA IL MIO TIMER 
//creo la modale e i suoi 3 pulsanti
//E ANCHE UN PULSANTE PER APRIRE LA NOSTRA MODALE
const modale= document.createElement('div');
modale.className='modal';
//modale.id='modale';

//CREO IL PRIMO PULSANTE E CI AGGIUNGO UN ASCOLTATORE
const button1=document.createElement('button'); 
button1.textContent='SI';
button1.className='buttonOne';
button1.addEventListener('click',()=>{
    console.log('hai premuto il bottone SI');
})
//CREO IL SECONDO PULSANTE E CI AGGIUNGO UN ASCOLTATORE
const button2=document.createElement('button');
button2.textContent='NO';
button2.className='buttonTwo';
button2.addEventListener('click',()=>{
    console.log('hai premuto il bottone NO');
})
//CREO IL TERZO PULSANTE E CI AGGIUNGO UN ASCOLTATORE
const button3=document.createElement('button');
button3.textContent='CHIUDI';
button3.className='buttonThree';
button3.addEventListener('click',()=>{
    modale.id='hidden';//ID CHE MI PERMETTE DI NASCONDE LA MIA MODALE
    console.log('hai premuto il bottone CHIUDI');
    console.log('hai chiuso la MODALE');
})

//CREO IL PULSANTE PER APRIRE LA MODALE
const openModalBtn=document.createElement('button');
openModalBtn.textContent='APRI MODALE';
openModalBtn.className='openModalBtn';
openModalBtn.addEventListener('click',()=>{
    modale.id='modale';//QUESTO ID MI PERMETTE IN CSS DI CAMBIARE IL DISPLAY:NONE IN DISPLAY:FLEX;
    console.log('HAI APERTO UNA MODALE E NON SOLO...');
    //console.log('...HAI AVVIATO UN TIMER CHE FA UN CONTO ALLA ROVESCIA PARTENDO DA 5');
    //console.log('ARRIVATO A ZERO IL TIMER SI FERMA E LA MODALE SI CHIUDE');
    let number=5;
    const modaleInterval=setInterval(() => {
        number--;
        if(number===0){
            clearInterval(modaleInterval);
            return;
        }
        //stampo in console il conto alla rovescia
        console.log('mancano',number,'secondi');
    }, 1000);
    //aggiungendo un set timeout ,al click, starto il timeout, e dopo 5 secondi la modale si chiude. IN AUTOMATICO
    setTimeout(()=>{
        modale.removeAttribute('id');
    },5000);
})


//ASSEMBLO LA MIA MODALE E IL PULSANTE PER APRIRLA
modale.append(button1, button2, button3);
ourContainer.insertAdjacentElement('afterend', openModalBtn);
openModalBtn.insertAdjacentElement('afterend',modale);


    
