console.log("ciao mondo");
//funzione query per facilitare l'esercizio;
function query(selector){
    return document.body.querySelector('selector');
}
//funzione queryall
function queryAll(selector){
    return document.body.querySelectorAll('selector');
}
//le funzioni non funzionano al 100%, evito di usarle

//Esercizio 1 : crea e aggiungi un elemento "h1" e un elemento "p";
//per posizionarli aiutati con insertAdjacentElement() e append();

//raggiungo il div con classe container e salvo;
const ourDiv = document.body.querySelector('.container');
console.log(ourDiv); //e' il nostro div
console.log(ourDiv.innerHTML); //codice corrispondente al div
//raggiungo il primo elemento h1, dentro il nostro div
const ourh1El = ourDiv.querySelector('h1');
console.log(ourh1El); //il nostro h1
console.log(ourh1El.innerHTML); //il codice corrispondene

//utilizzando inner.html....sostituiamo....non aggiungiamo
//ourh1El.innerHTML=`<h1>ciao,sono un h1,e arrivo a javascript</h1>`;
//console.log(ourh1El); //verifico che sia sostituito
//console.log(ourh1El.innerHTML);//il testo e' stato sostituito

//in questo momento ho sostituito il contenuto h1 con un'altro testo h1
//ovviamento, non e' il modo migliore
//io ho bisogno di aggiungere contenuti html, non sostituirli
//uso createElement()
const ourNewH1El=document.createElement("h1");//lo creo
ourNewH1El.innerHTML = 'CIAO,arrivo da JavaScript e sono un h1';//gli ho un corpo
ourNewH1El.style.fontSize = '1.5rem';//gli do uno stile
//lo  voglio collocare appena dopo il nostro div con classe="container";
ourDiv.insertAdjacentElement("afterbegin",ourNewH1El);
console.log(ourNewH1El); //stampo per controllare
console.log(ourNewH1El.innerHTML); //stampo in console per verificare le modifiche apportate---[elemento aggiuto]

//creo un paragrafo da JavaScript;
const ourNewParagrafEl = document.createElement("p");//lo creo
ourNewParagrafEl.innerHTML = 'Sono un nuovo paragrafo e arrivo anche io da JavaScript';//aggiungo contenuto
//aggiungo giusto due righe di style per il mio paragrafo
ourNewParagrafEl.style.backgroundColor = 'blue'; //gli do uno style
ourNewParagrafEl.className = "ourparagrafo";//e una classe per sfruttare anche css
//lo colloco con append, rispetto al mio h1 precedentemente creato da zero
//append collora l'elemento in fondo al (contenitore),agganciandolo, come ultimo nodo
ourNewH1El.append(ourNewParagrafEl); //collocato :)

//Esercizio 2: Bottone contatore
const javaButton = document.createElement("button"); //lo creo 
ourNewParagrafEl.insertAdjacentElement("afterend",javaButton); //lo posiziono
//aggiungo del testo e una classe al bottone
javaButton.innerHTML = "i screwed up"; //il testo dovrebbere essere "0"
javaButton.className = "divButton";
//creo ua una funzione all'evento onmouseenter che cambia lo style css del pulsante;


javaButton.onmouseenter = function(event){
    javaButton.className = "newDivButtonClass";
    console.log(event); //semplicemente stampo l'evento, per gioco. Posso farlo perche sono dentro una funzione 
}
//ne creo una identica ma con effetti opposti, all'evento onmouseleave, se no le modifiche rimanevano;
javaButton.onmouseleave = function(event){
    javaButton.className = "divButton";
    console.log(event); //idem
}
//creo una funzione all'evento onclick del nostro pulsante;
let count = 0;
javaButton.onclick=function(){
    count = count+1; 
    const currentWidth = javaButton.getBoundingClientRect().width;
    javaButton.style.minWidth =`${currentWidth}`;//mantengo una larghezza minima inviolata
    javaButton.innerHTML = count;
    console.log(count);//in console leggo i numeri dei clisk effettuati
}
//Esercizio 3:dopo aver inserito un form nel file html.....
//identifico prima il form;
const FormEl = document.body.querySelector('form');
console.log(FormEl);//stampo per verifica
//console.log(ourFormEl.innerHTML);//stampo per verifica
//Identifico il suo input;
const inputEl = document.body.querySelector('input');
//console.log(inputEl);//sampo per verifica
//fin qua,tutto bene;
//creo una funzione all'input della form

inputEl.oninput = function(event){
    console.log(event);
    console.log("stai digitanto",inputEl.value);
    event.preventDefault();
}


