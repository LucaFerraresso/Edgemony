//Esercizio 1: raggiungi l'elemento h1 nel file html

//raggiungo l'elemento con id 'heading' all'interno della pagina utilizzando getElementById
const ourTestH1= document.getElementById('heading');
console.log(ourTestH1);//---<h1 title="titolo" id="heading" ....</h1>

//Esercizio 2:

//raggiungo tutti gli elementi button all'interno del body
const ourButtonEls = document.body.querySelectorAll('button');
//itero gli elementi, e per ogni bottone raggiunto, stampo il testo al loro interno
for(let button of ourButtonEls){
    console.log("testo button",button.innerHTML);
}

//Esercizio 3: dati due pulsanti....

//identifivo il primo pulsante
const resetBtn = document.body.querySelector('button');
console.log(resetBtn); //stampo l'elemento trovato
console.log(resetBtn.innerHTML); //stampo il tuo testo per verifica

//identifico il secondo pulsante
const clickBtn = document.body.querySelectorAll('button')[1];
console.log(clickBtn); //stampo l'elemento trovato
console.log(clickBtn.innerHTML); //stampo il suo testo per verifica

//Funzione reset: al momento del click sul punsante reset, porto a zero innerhtml del clickbtn
resetBtn.onclick= function(){
    let clickBtnInnerText= clickBtn.innerHTML;
    clickBtn.innerHTML = 'sono stato resettato';
}
//funzione clickbtn: al momento del click, stampo il testo del pulsante e incremento il clickCounter di 1
let clickCounter=0
clickBtn.onclick= function(){
    clickCounter++;
    console.log("testo del pulsante premuto",clickBtn.innerHTML);
    console.log(clickCounter);
    }


