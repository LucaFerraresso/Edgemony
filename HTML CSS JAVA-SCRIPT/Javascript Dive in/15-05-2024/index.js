//esercizio 1: chiedo all'utente di inserire il suo nome proprio
const userName = prompt(`Per favore, inserisci il tuo nome proprio`); //chiediamo all'utente di inserire il proprio nome propro tramite un prompt
console.log("Username", userName); //stampo in console il risultato

//esercizio 2: chiedo all'utente di inserire il suo cognome
const userLastName = prompt(`Per favore, inserisci il tuo cognome`); //chiediamo all'utente di inserire il proprio cognome tramite un prompt
console.log("Lastname", userLastName); //stampo in console il risultato

//Esercizio 3: calcolo con l'operatore "length" la lunghezza delle stringhe appena ricevute dal prompt
const firstCheck = Number(userName.length); //controllo con l'operazione length la lunghezza della stringa e converto in NUMERO il valore ottenuto
console.log("Name length", firstCheck); //stampo in console il risultato 
const secondCheck = Number(userLastName.length); //controllo con l'operatore length la lunghezza della stringa e converto in NUMERO il valore ottenuto
console.log("Lastname length", secondCheck); //stampo in console il risultato

//Esercizio 4: attraverso un if, paragono il valori appena calcolati per programmare degli alert specifici
if (firstCheck != null && firstCheck >=3){ //apro un ciclo if per determinare la qualita' delle informazioni ricevute
    alert("BENE, possiamo proseguire"); //alert di conferma
    console.log("BENE, possiamo proseguire"); //se i dati ricevuti sono: length>=3 e !=null posso proseguire 
} else{
    alert("Il nome proprio deve contenere almeno 3 caratteri..."); //alert di conferma
    console.log("Il nome proprio deve contenere almeno 3 caratteri..."); //in caso contrario, chiedo di inserire di nuovo i dati
    window.location.reload(); //ricarico la pagina per permettere il ri-inserimento dei dati
}

//Esercizio 5: prendo il nome inserito e lo salvo in una variabile transformando la prima lettera in maiuscola
const firstNameletter = userName[0]; //estraggo il primo carattere dalla stringa userName
console.log("Questa è la prima lettare del nome inserito:", firstNameletter); //stampo in console per verifica
const firstNameLetterUpperCase = firstNameletter.toUpperCase(); //transformo la tringa appena creata nella sua versione maiuscola
console.log("Trasformo la prima lettera del nome proprio nella sua versione MAIUSCOLA:", firstNameLetterUpperCase); //stampo in console per verifica
const userNameWithoutFirstLetter = userName.substring(1); //attreverso l'operatore "substring" ottengo una sotto-stringa. In questo caso con il carattere all'indice(1) rimosso
console.log("Riscrivo il nome proprio eliminando la prima lettera:", userNameWithoutFirstLetter); //stampo il risultato per verifica
const firstNameProperlyWritten = `${firstNameLetterUpperCase}${userNameWithoutFirstLetter}`; //creo la tringa definitiva
console.log("Riscrivo il nome proprio:\n\n", firstNameProperlyWritten);  //stampo in console per verifica

//Esercizio 6: ripeto l'esercizio 5 ma questa volta utilizzando la variabile userLastName
const firstLastNameLetter = userLastName[0]; //estraggo il primo carattere dalla stringa userLastName
console.log("Questa è la prima lettera del cognome inserito:", firstLastNameLetter); //stampo in console per verifica
const firstLastNameLetterUpperCase = firstLastNameLetter.toUpperCase(); //transformo la stringa appena creata nella sua versione maiuscola
console.log("Trasformo la prima lettera del cognome nella sua versione maiuscola:", firstLastNameLetterUpperCase); //stampo in console per verifica
const lastNameWithoutFirstLetter = userLastName.substring(1); //attraverso l'operatore "substring" ottengo una sotto-stringa. In questo caso con il carattere all'indice(1) rimosso
console.log("Riscrivo il cognome eliminando la prima lettera:", lastNameWithoutFirstLetter); //stampo per verifica
const lastNameProperlyWritten = `${firstLastNameLetterUpperCase}${lastNameWithoutFirstLetter}`; //creo la stringa definitiva
console.log("Riscrivo il cognome:\n\n", lastNameProperlyWritten); //stampo in console per verifica

const userNameUserLastName = firstNameProperlyWritten.concat(" ",lastNameProperlyWritten); //stringa completa

console.log("CIAO", userNameUserLastName); // DEFINITIVO, [alert("CIAO", userNameUserLastName);] nell'alert non visualizzo la stringa.
