//Esercizio 1: dato un oggetto coder.....
const coder = {
    firstName: 'Luca',
    lastName: 'Pagliaro',
    age: 29,
    skills:['JavaScript','HTML','CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
}
 //stampo in console gli attributi corrispondenti all'indice (skills)
console.log("values found on index(skills):", coder['skills']);

//aggiungo all'oggetto coder un nuovo indice (coderAddress)
coder['coderAddress'] = { //coderAddress e' un oggetto a sua volta! avente al suo interno due indici inseriri dell'utente 
    country:prompt("Tell me your originary country"), //primo indice dell'oggetto coderAddress, country
    street:prompt("Tell me your street's name") //secondo indice dell'oggetto coderAddress, street
}
//stampo in console gli attributi corrispondenti all'indice (country e street) dell'oggetto coderAddress per sicurezza
console.log("Two more values inserted by the user:",
    "\ncountry:",coder.coderAddress['country'], //primo indice + value dell'indice
    "\nstreet:", coder.coderAddress['street']); //secondo indice + value dell'indice

//stampo in console l'oggetto coder, aspettandomi di vedere al suo interno il nuovo oggetto coderAddress
//console.log("all our keys/index with values inside object coder:", coder); funziona!!!! 

//stampo tutti le chiavi dell'oggetto coder con un ciclo for...in
for(let key in coder ){
    console.log("All our object's indexes:" , key); //output----firstName, lastName ecc ecc....
}

//SUDDIVIDO L'OGGETTO CODER IN DUE ARRAY .UNO PER LE CHAVI E UNO PER LE VALUE usando i metodi Object.keys ,Object.values
//array con dentro gli indici, ovvero i nomi delle chiavi
const keysArray = Object.keys(coder) ;
console.log("Keys' names into an Array:", keysArray);
//array con dentro i valori degli indici
const keysValuesArray = Object.values(coder);
console.log("Keys' values into an Array:", keysValuesArray);

//creo un array con tutte le vocali al suo interno
let vocali = ['a','e','i','o','u'];
//ciclo for per iterare gli elementi degli array
for (let i=0; i<keysArray.length; i++){
    let arrayItem = keysArray[i]; //creo una variabile che mi indentifica ogni elemento dell'array keyArray
    let firstLetterKey = arrayItem.charAt(0); //cosi posso identificare la sua inizile 
    let firstLetterKeyToLowerCase = firstLetterKey.toLowerCase(); //La trasformo in minuscola per sicurezza
    //console.log(arrayItem, firstLetterKey); //output ----first name-f....last name-l....age-a....
    if (vocali.includes(firstLetterKeyToLowerCase)){ //controllo se e' contenuta nel mio array di vocali
        console.log("DONE", arrayItem , keysValuesArray[i]); //se si, stampo il nome della chiave e il suo corrispettivo 
                                                             //dell'array keyValuesArray. in modo da avere 
                                                             //chiave e valore vicini
                                                             //output---age 29
                                                             //---------address [city:Catania, zipcode: 95100]
    }
}

//ESERCIZIO FINALE 
//creiamo un object da zero con l'aiuto dell'utente. (prompt);
const key1= prompt("insert here one random key ,your choise"); //facciamo inserire all'utente la chiave
const value1= prompt("insert here your random key value"); //facciamo inserire all'utente il valore della chiave
const objectFromZero = {
    key1: value1   
}
console.log("Object from zero by user:", objectFromZero['key1']); //stampo in console il prodotto finale