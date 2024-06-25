//esercizio 1
const vocali = ['a','e','i','o','u']; //creo un array contententi tutte le vocali
//const consonanti = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','z'];

//Primo prompt
const firstWord = prompt("inserisci una parola a tuo piacere"); //userinput
const firstWordToLowerCase = firstWord.toLowerCase(); //trasformo l'input tutto in minuscolo
const firstLetter = firstWordToLowerCase.charAt(0); //controllo la prima lettera dell'input
//Ternario;
vocali.includes(firstLetter) ? console.log('vocale') : console.log('consonante'); //controllo se e' contenuto e se si, applico due condizioni

//Secondo prompt
const secondWord = prompt("inserisci una parola a tuo piacere");
const secondWordToLowerCase= secondWord.toLowerCase();
const firstLetterSecondWord = secondWordToLowerCase.charAt(0);
//Ternario
vocali.includes(firstLetterSecondWord) ? console.log('vocale') : console.log('consonante');

//Terzo prompt
const thirdWord = prompt("inserisci una parola a tuo piacere");
const thirdWordToLowerCase = thirdWord.toLowerCase();
const firstLetterThirdWord = thirdWordToLowerCase.charAt(0);
//Ternario
vocali.includes(firstLetterThirdWord) ? console.log('vocale') : console.log('consonante');

console.log(firstLetter, firstLetterSecondWord, firstLetterThirdWord); //stampo per conferma tutte le parole inserite
const arraySoluzioni = [firstLetter,firstLetterSecondWord,firstLetterThirdWord]; //trasformo in array la stringa precedente
console.log(arraySoluzioni); //stampo in console le risposte all'interno di un'array

//trasformare una stringa nella sua reverse con una verifica del contenuto
const userInput = prompt("inserici la parola da invertire"); //prompt dell'utente
if (typeof userInput=='string' && userInput.length>0){
    console.log(userInput.split('').reverse().join(''));
}else{
    console.log("error! try again");
    alert(`Invalid value`);
    window.location.reload();
}

//const arrayUserInput = userInput.split(''); //trasformo l'output in un array
//const reverseUserInput = arrayUserInput.reverse(); //uso il metodo reverse
//const definitiveUserInput = reverseUserInput.join(''); //riduco l'array in una stringa con il metodo join


//quizzone rivisitato

let score= 0;
let MAX_SCORE = 12;
const firstAnswer = prompt("Qual'è la capirale d'Italia? A)Roma; B)Napoli; C)Catania; D)Venezia;");
switch (firstAnswer) {case "Roma" :
    score+=3;
    break
    case "Napoli":
    case "Catania":
    case "Venezia":
        score -=1;
        break
}
console.log("score=",score);
const secondAnswer = prompt("In che anno l'Italia ha vinto il suo ultimo mondiale? A)2002; B)2006; C)2010; D)2014;");
switch (secondAnswer) {case "2006" :
    score+=3;
    break
    case "2002":
    case "2010":
    case "2014":
        score -=1;
        break
}
console.log("score=",score);
const thirdAnswer = prompt("In che anno siamo? A)2021; B)2022; C)2023; D)2024;");
switch (thirdAnswer) {case "2024" :
    score+=3;
    break
    case "2021":
    case "2022":
    case "2023":
        score -=1;
        break
}
console.log("score=",score);
const fourthAnswer = prompt("Chi e' il nostro presidente della Repubblica? A)Mattarella; B)Pippo; C)Pluto; D)Paperino;");
switch (fourthAnswer) {case "Mattarella" :
    score+=3;
    break
    case "Pippo":
    case "Pluto":
    case "Paperino":
        score -=1;
        break
}
console.log("score=",score);

if (score==MAX_SCORE){console.log("Sei un campione")
}else{
    console.log("Ritenta e concentrati")
}


