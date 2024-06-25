//Esercizio 3: funzione che conta i numero di click del mouse 
let count = 0; //inizio a contare parteno da 0
const countClick = () => {
    count=count+1;
    console.log("numero di click:", count);
    return count;
}

document.body.onclick = countClick;

//Creo una funzione che conta partedo da 0 
//il numero aumenta insieme al numero di esecuzioni
//collegandola al click del mouse, il contatore aumenta ad ogni click

