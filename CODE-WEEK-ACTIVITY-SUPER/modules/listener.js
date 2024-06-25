import {rendercard,idArray,userIdArray,titleArray,completedArray,categoryId} from "../index.js";
import {sportList,foodList,familyList,otherList,Data} from "../index.js";
import {getCardById} from "../data/data.js";
import {Cardcreator,openModal} from "../modules/components.js";
import { errorEL, errorEL2 } from "../data/errorHandlers.js";

//bottone con la funzione get 
const ourButton= document.querySelector('.GET');
const inputEl= document.querySelector('.check-input');
//identifico gli elementi nel DOM

//DIV CONTENITORE 

const cardDiv= document.querySelector('.cards-container');
cardDiv.className='cards-container';
ourButton.addEventListener('click',(e)=>{
    cardDiv.innerHTML="";
    e.preventDefault();
    const userId= inputEl.value;
    //prendo l'elemento con la mia funzione GETCARDBYID
    getCardById(userId)
    rendercard(idArray[userId], userIdArray[userId],titleArray[userId],completedArray[userId],categoryId[userId])
    if(inputEl.value===''){
        errorEL.textContent='INSERT AN ID ';
    }else if(inputEl.value!=''){
        errorEL.textContent='';
    }
    //se l'utente inserisce un id che non esiste, mi da errore
});

// DIV categorie ascoltatore
//IDENTIFICO PRIMA GLI ELEMENTI NEL DOM
const filterDiv= document.querySelector('.categorylist');
//ad ogni click genero una lista per categorie e la visualizzo a dom
filterDiv.addEventListener('click', (e)=>{
    let isActivated= e.target.classList.contains('activated');
    if(e.target.classList.contains('sport')){
        cardDiv.innerHTML="";
        e.target.classList.add('activated');
        //console.log("hai cliccato sport, questi sono gli elementi sport:",sportList);
        for (let i=0; i<sportList.length; i++){
            Cardcreator(sportList[i]);
        }
    }else if(e.target.classList.contains('food')){
        cardDiv.innerHTML="";
        e.target.classList.add('activated');
        //console.log("hai cliccato food, questi sono gli elementi food:", foodList);
        for (let i=0; i<foodList.length; i++){
            Cardcreator(foodList[i]);
        }
    }else if(e.target.classList.contains('family')){
        cardDiv.innerHTML="";
        e.target.classList.add('activated');
        //console.log("hai cliccato family, questi sono gli elementi family:", familyList);
        for (let i=0; i<familyList.length; i++){
            Cardcreator(familyList[i]);
        }
    }else if(e.target.classList.contains('other')){
        cardDiv.innerHTML="";
        e.target.classList.add('activated');
        //console.log("hai cliccato other, questi sono gli elementi other:", otherList);
        for (let i=0; i<otherList.length; i++){
            Cardcreator(otherList[i]);    
        }
    }if(isActivated){ 
        e.target.classList.remove('activated');
        cardDiv.innerHTML="";
    }
    cardDiv.classList.remove('error');
    errorEL.textContent='';
    errorEL2.textContent='';
})

//aggiungo un listener al cardsContainer per aprire una modale 
//ad ogni click che faccio sopra alle cards

cardDiv.addEventListener('click', (e)=>{
    if(e.target.classList.contains('card')){
        openModal(e.target)
    }else{
        //console.log("hai cliccato su un elemento diverso dalla card");
    }
});

//aggiungo un campo input per filtrare le card in base al loro titolo
//prima individuo gli elementi nel DOM

const searchDiv=document.querySelector('.search-bar');
const searchInput=document.querySelector('.search');
const resetButton=document.querySelector('.reset-Btn');

//aggiungo in listener all'input

searchInput.addEventListener('input',()=>{
    const triggheredButtonsDiv= document.querySelector('.categorylist');
    const buttons=triggheredButtonsDiv.querySelectorAll('button');
    const value=searchInput.value.toLowerCase();
    if(buttons[0].classList.contains('activated')){
        const filteredCards=sportList.filter(card=>{
                return card.title.toLowerCase().includes(value);
        });
        cardDiv.innerHTML='';
        filteredCards.forEach(card=>{
            const cardElement=Cardcreator(card);
            cardDiv.append(cardElement);
        });
        if(filteredCards.length===0){
            const errorMessage=document.createElement('h1');
            errorMessage.className='error-message';
            errorMessage.textContent='There are no cards matching your search';
            cardDiv.append(errorMessage);
        }
    }else if(buttons[1].classList.contains('activated')){
        const filteredCards=foodList.filter(card=>{
                return card.title.toLowerCase().includes(value);
        });
        cardDiv.innerHTML='';
        filteredCards.forEach(card=>{
            const cardElement=Cardcreator(card);
            cardDiv.append(cardElement);
        });
        if(filteredCards.length===0){
            const errorMessage=document.createElement('h1');
            errorMessage.className='error-message';
            errorMessage.textContent='There are no cards matching your search';
            cardDiv.append(errorMessage);
        }
    }else if(buttons[2].classList.contains('activated')){
        const filteredCards=familyList.filter(card=>{
                return card.title.toLowerCase().includes(value);
        });
        cardDiv.innerHTML='';
        filteredCards.forEach(card=>{
            const cardElement=Cardcreator(card);
            cardDiv.append(cardElement);
        });
        if(filteredCards.length===0){
            const errorMessage=document.createElement('h1');
            errorMessage.className='error-message';
            errorMessage.textContent='There are no cards matching your search';
            cardDiv.append(errorMessage);
        }
    }else if(buttons[3].classList.contains('activated')){
        const filteredCards=otherList.filter(card=>{
                return card.title.toLowerCase().includes(value);
        });
        cardDiv.innerHTML='';
        filteredCards.forEach(card=>{
            const cardElement=Cardcreator(card);
            cardDiv.append(cardElement);
        });
        if(filteredCards.length===0){
            const errorMessage=document.createElement('h1');
            errorMessage.className='error-message';
            errorMessage.textContent='There are no cards matching your search';
            cardDiv.append(errorMessage);
        }
    }else{
        const filteredCards=Data.filter(card=>{
            return card.title.toLowerCase().includes(value);
        });
        cardDiv.innerHTML='';
        filteredCards.forEach(card=>{
            const cardElement=Cardcreator(card);
            cardDiv.append(cardElement);
        });
        if(filteredCards.length===0){
            const errorMessage=document.createElement('h1');
            errorMessage.className='error-message';
            errorMessage.textContent='There are no cards matching your search';
            cardDiv.append(errorMessage);
        }
        inputEl.value='';
        errorEL.textContent='';
        errorEL2.textContent='';
    }
});

//aggiungo in listener al reset button che al click mi resetta la ricerca e mi carica tutte le card a DOM
resetButton.addEventListener('click',()=>{
    inputEl.value='';
    errorEL.textContent='';
    searchInput.value='';
    errorEL2.textContent='';
    cardDiv.innerHTML='';
    cardDiv.classList.remove("error");
   
    const triggheredButtonsDiv= document.querySelector('.categorylist');
    const buttons=triggheredButtonsDiv.querySelectorAll('button');
    buttons[0].classList.remove('activated');
    buttons[1].classList.remove('activated');
    buttons[2].classList.remove('activated');
    buttons[3].classList.remove('activated');
    Data.forEach(card=>{
        const cardElement=Cardcreator(card);
        cardDiv.appendChild(cardElement);
    });
});

export {ourButton,inputEl,cardDiv,filterDiv,searchDiv,searchInput,resetButton}