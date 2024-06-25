//Esercizio 1:
let numberArray = [-1 , -2, -10, 2, 5]; //creo un array
//visualizzo in console solo i valori della stringa che sono maggiori di zero
for (let i=0; i<numberArray.length; i++){
    let numberArrayToNumber = Number(numberArray[i]);
    if (numberArrayToNumber<0){continue}
        //console.log(typeof numberArrayToNumber);
        console.log("numero maggiore di zero:", numberArrayToNumber); 
    }

//stampo in console tutti i valori presenti nell'array, interrompendomi al primo valore positivo
for (let i=0; i<numberArray.length; i++){
    let numberArrayToNumber = Number(numberArray[i]);
    if (numberArrayToNumber>0){break}
        //console.log(typeof numberArrayToNumber);
        console.log("numeri prima del break:", numberArrayToNumber); 
    }

//Esercizio 2:
let userWord = prompt('Inserisci una parola e tuo piacere'); //chiedo all'user di inserire una parola
let arrayUserWord = userWord.split(''); //come prima cosa la trasformo in un array 
let length= arrayUserWord.length; //e ne calcolo la lunghezza
let isPalindroma; //creo una variabile per definire se e' palindroma o no

for (let i=0; i<length; i++){ //ciclo for per controllare gli elementi uno ad uno, i=[0], i=[1]...i=[length]
    if (userWord[i] !== userWord[length -1 -i]){ //controllo i caratteri dall'inizio e li confronto con i caratteri dalla fine
        isPalindroma=false; //se non corrispondono , non e' palindroma
        break
    }
}
if(isPalindroma==true){ //se invece la parola e' palindroma....
    console.log("la parola e' palindroma");
    alert(`la parola è palindroma`)
    }else{
        console.log("la parola non e' palindroma");
        alert(`la parola non è palindroma`)
    }
