//Esercizio 1: creo una funzione capace di pulire il testo in console

function clear(){
    return console.clear();

}
//eseguo la funzione , specificando quando, e guardo i risultato
console.log("prima della funzione"); //---"prima della funzione"
clear(); //---la console è stata cancellata
//la funzione ha cancellato tutti i contenuti della console

//Esercizio 2: creo una funzione in grado di convertirmi le iniziali di una stringa nella sua versione maiuscola;

let firstString = 'ciao, sono una stringa amichevole'; //utilizzo una frase, ma potrei utilizzare una singola parola
let firstLetter = firstString[0];// determino cos'è la prima lettera
//uso il metodo replace per sostituire...
    
function upperCase(string){
    return firstString.replace(firstLetter, firstLetter.toUpperCase());//il motodo vuole specifichi cosa voglio sostituire
                                                                       //e con cosa voglio sosituirlo.
                                                                       // ....replace(firstLetter, C)
}
console.log(upperCase(firstString));//---'Ciao, sono una stringa amichevole';


//Esercizio 3: creo una funzione,dati due parametri di ingresso, controllo se sono numeri e in seguito stampo il + piccolo;
let numero1 = Number(prompt("inserisci un numero a tuo piacimento")); //chiedo all'user di inserire un numero---
let numero2 = Number(prompt("inserisci un'altro numero a tuo piacimento")); //....

function numeroMinore (numero1,numero2){
    if(typeof numero1 !== 'number' || typeof numero2 !== 'number'){ //controllo che i due valori sia validi
        console.log("inserisci valori validi, devono essere ENTRAMBI numeri");
    }
    if (numero1<numero2){ //Se il primo numero e' minore
        return numero1;
    }else { //se il secondo numero è minore
        return numero2;
    }
}

console.log("il numero minore tra i due inseriti è:", numeroMinore(numero1,numero2)); //stampo in console il valore 
//console.log(numeroMinore(1, 3));---// 1
//console.log(numeroMinore(5, -3));---// -3
//console.log(numeroMinore(100, 20));---// 20

//Esercizio 4: base potenza
let base = Number(prompt("Inserisci la base per una potenza")); //chiedo all'utente.....
let esponente = Number(prompt("Inserisci l'esponente della potenza")); //chiedo all'utene....

function potenza (base,esponente){
    let output = base; 
    if (typeof base !== 'number' || typeof esponente !== 'number'){ //verifico prima che i valori siano validi
        console.log("Devi inserire due valori validi");
    }
    if(esponente===0){ //aggiungo una condizione se l'esponente è uguale a 0
        let output=1;
        return 1;
    }
    for (let i=1;i<=esponente;i++){ //il ciclo serve per ripete l'operazione "esponente" volte
        output *= base ;
    }
    return output;
}
console.log(potenza(base,esponente)); //stampo il risultati in console

//Esercizio 5: Funzione ricordiva per ottenere il valore fattoriale di un numero dato
///////




    

