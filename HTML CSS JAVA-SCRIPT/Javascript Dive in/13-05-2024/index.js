// definisco variabile numerica;
let etautente; //inizializzo una variabile senza proprieta'
etautente= 27; //definisco il valore della variabile 
console.log('etautente'); //chiedo di stamparmi il nome della variabile
console.log(etautente); //chiedo di stamparmi il valore della variabile
console.log(typeof etautente); //chiedo di stamaparmi il typeof della variabile, in questo caso e' un numero

//definisco variabile stringa;
let nomeutente; //inizializzo una variabile senza proprieta'
nomeutente= 'luca'; //definisco il valore della variabile 
console.log('nomeutente'); //chiedo di stamparmi il nome della variabile
console.log(nomeutente); //chiedo di stamparmi il valore della variabile
console.log(typeof nomeutente); //chiedo di stamaparmi il typeof della variabile, in questo caso e' una stringa

//definisco variabile booleana;
let booleanwho; //inizializzo una variabile senza proprieta'
booleanwho= true; //definisco il valore della variabile 
console.log('booleanwho'); //chiedo di stamparmi il nome della variabile
console.log(booleanwho); //chiedo di stamparmi il valore della variabile
console.log(typeof booleanwho); //chiedo di stamaparmi il typeof della variabile, in questo caso e' un boolean

//come convertire una variabile, da number a stringa, da stringa a boolean ecc ecc....

let trentacinque='35'; //definisco due variabili in stringa
let venti='20'; //seconda variabile
let risultato = trentacinque + venti; //definisco la terza variabile come la somma della prime due stringhe precedenti
console.log(risultato); //mi risutera' 3520, perche' e' la somma di due stringhe
console.log(typeof risultato); //valore=stringa

risultato = Number(trentacinque) + Number(venti); //associo a risultato il valore della somma dei valori NUMERICI delle variabili precedentemente definite
console.log(risultato); //risultera' 55, perche' il valore e' definito dalla somma numerica
console.log(typeof risultato); //valore=number
