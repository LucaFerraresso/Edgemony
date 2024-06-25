import { cardDiv } from "../modules/listener.js";
import { inputEl } from "../modules/listener.js";

const errorEL=document.querySelector('.errorText')
errorEL.className='errorText';

const errorEL2=document.querySelector('.errorText2');
errorEL2.className='errorText2';


//allora
//l'API va in errore soLo dentro la risposta, mai dentro il data. (si, lo so, data e' = "risposta.JSON()"")
//quindi nel catch ho cercato l'errore nella RISPOSTA
//facendo la stessa cosa con il data, non va MAI in errore
//dentro la funzione GETcards, l'errore arriva da un end point sbagliato
//non c'e nessuna altra maniera per mandarlo in errore

//aggiungo anche un massaggio dentro al card div nel caso non ci sia l'id cercato

const errorHandler=(res)=>{
    console.warn("(GET) errore arrivato al catch",res);
    //posso accedere al valore dell'errore in risposta con res.status
    //console.log("response status:",res.status);
    errorEL.textContent=(`ERROR: ${res.status}, YOUR ENDPOINT IS WRONG`);
    errorEL2.textContent=(`ERROR: ${res.status}, YOUR ENDPOINT IS WRONG`);
    const errorMessage=document.createElement('h1');
    errorMessage.className='error-message';
    errorMessage.textContent=`ERROR: ${res.status}, YOUR ENDPOINT IS WRONG`;
    cardDiv.append(errorMessage);
}

//dentro la funzione getCardById, l'errore arriva da un id inesistente id>200

const errorHandler2=(res)=>{
    //console.warn("(GETbyID) errore arrivato al catch",res);
    //console.log("response status:",res.status);
    errorEL.textContent=(`ERROR: ${res.status}, YOUR ID DOESN'T EXIST`);
    const errorMessage=document.createElement('h1');
    errorMessage.className='error-message';
    errorMessage.textContent='There are no cards matching your search';
    cardDiv.append(errorMessage);
}

export {errorHandler,errorHandler2,errorEL,errorEL2};