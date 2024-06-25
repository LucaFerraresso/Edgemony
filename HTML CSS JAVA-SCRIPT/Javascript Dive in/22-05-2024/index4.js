let stringautente = prompt("inserisci una frase a tuo piacimento");
let ourstring = stringautente.toLowerCase();
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetindex = {}

//prima calcolo gli indici dell'alfabeto
for (let i=0;i<alphabet.length;i++){
    const lettera = alphabet[i];
    alphabetindex[lettera]=i+1;
 
}
console.log(alphabetindex);
//ora ho un oggetto,"alphabetindex" che ha per indici le lettere dell'alfabeto
//e per valori ,gli indice della lettera.

//per poter confrontare gli elementi della frase 
//con gli elementi dell'oggetto:..
//devo convertire l'oggetto alphabetindex in due array
//in due array con Object.keys e Object.values

//array con le lettere
let arrayalphabetletters= Object.keys(alphabetindex);
//stampo in console il risultato
console.log(arrayalphabetletters); //---[a,b,c,d,e,f,g....]

//array con gli indici delle lettere 
let arraylettersValues= Object.values(alphabetindex);
//stampo in console il risultato
console.log(arraylettersValues); //---[1,2,3,4,5,6,7....]

//adesso che ho i due array...
//suddivido il PROMPT in un array con ARRAY.FROM()...
let stringadefinitiva = Array.from(ourstring);
//stampo in console il risultato
console.log(stringadefinitiva);

//adesso itero gli elementi del prompt con un ciclo for 
//per assegnarli a loro volta un indice. (prima cosa) .(linea 48).
//poi, controllo se gli stessi elementi sono contenuti dentro 
//l'array dell'alfabeto .(linea 49).
//se si, cambio il loro indice 
//con quello dell'alfabeto
//in questo modo se scrivo 'ciao', verra' fuori ['c','i,'a','o'];
//l'indice 1 della c diventa l'indice c dell'alfabeto .(linea 50)

const risultato=[]; //array risultato
for (let i=0;i<stringadefinitiva.length;i++){
    let letteraindex = stringadefinitiva[i];
    if(arrayalphabetletters.includes(letteraindex)){
        let newLetteraindex = arrayalphabetletters.indexOf(letteraindex);
        risultato.push(newLetteraindex+1);
    }
}console.log(risultato);

//l'arrey risultato e' un array di indici, riferiti all'alfabeto
//assegno due indici
//uno agli elementi della stringa 
//e l'altro agli elementi dell'alfabeto
//se l'elemento dela stringa e' contenuto nell'array alphabeto...
//riassegno l'indice all'elemento, sostituendolo
//con l'indice di quel elemento nell'alfabeto.



