const stringa1= "ciao mondo"; //prima-variabile, double, 
console.log("stringa1=", stringa1); //stampo in console

const stringa2= 'mio zio é originario dalla citta dell\'Aquila'; //seconda-varibile, single
console.log("stringa2=", stringa2); //stampo in console

let stringa3= `${stringa1}\n${stringa2}`; //definisco una terza-variabile come a somma delle prime due ,andando anche a capo /n
console.log("stringa3=", stringa3); //stampo in console la terza-varibile

let nuovastringa= (stringa3.toUpperCase()); //definisco una nuova-variabile = terza variabile ma visualizzata in minuscolo
console.log("nuovatringa=", nuovastringa); //stampo in console la mio nuova-variable

let usertext= prompt("Inserisci testo"); //chiedo all'user di inserire del testo attraverso un prompt
console.log(usertext); //stampo in console il testo inserito

console.log(usertext.toLowerCase()); //stampo il testo inserito in console ma trasformato tutto in minuscolo

let bigliettolotteria= prompt("Inserisci n° biglietto"); //chiedo all'utente di inserire il numero del biglietto
if(Number(bigliettolotteria)>7){ //se il numero del biglietto e' maggiore di 7
    console.log("HAI VINTO!!!"); //la console ti restituira' "HAI VINTO!!!"
} else{
    console.log("RITENTA E SARAI PIU' FORTUNATO..."); //Iin caso contrario ,il biglietto non sara' vincente
}







