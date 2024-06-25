import {idArray,userIdArray,titleArray,completedArray,categoryId,Data} from "../index.js";
import {sportList,foodList,familyList,otherList} from "../index.js";
import { inputEl, searchInput } from "../modules/listener.js";
import {errorHandler,errorHandler2,errorEL,errorEL2} from "./errorHandlers.js"

// FETCH GET , chiamata get per ricevere la risposta 

const GETcards= async()=>{
    try{
        const res= await fetch(`https://jsonplaceholder.typicode.com/todos`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data= await res.json();
        //console.log("risposta alla chiamata get",data)
        //adesso che ho la risposta completa ,aggiungo le categorie
        const categoryArray=  [
            {
            id: 1,
            name: "sport"
            },
            {
            id: 2,
            name: "food"
            },
            {
            id: 3,
            name: "family"
            },
            {
            id: 4,
            name: "other"
            }
        ];
        for(let i=0; i<data.length; i++){
            //estraggo un numero da 0 a 4 e lo attribuisco all'indice category
            //diventera' la mia categoria
            data[i].category= categoryArray[Math.floor(Math.random()*4)].id
            categoryId.push(data[i].category)
            idArray.push(data[i].id)
            userIdArray.push(data[i].userId)
            titleArray.push(data[i].title)
            completedArray.push(data[i].completed)
            //qui per sicurezza mi salvo e mi stampo TUTTA la risposta GET
            Data.push(data[i]);
            //adesso definisco anche le categorie 
            if (data[i].category===1){
                sportList.push(data[i])
            }else if(data[i].category===2){
                foodList.push(data[i])
            }else if(data[i].category===3){
                familyList.push(data[i])
            }else if(data[i].category===4){
                otherList.push(data[i])
            }
        }
        if(!res.ok){
            throw res
        }
        errorEL.textContent="";
        errorEL2.textContent="";
        return data
    }catch(res){
        errorHandler(res);
    }
}

//funzione getcardbyid 

//funzione per il mio pulsante OTTIENI
//ottengo l'oggetto attraverso l'id
const getCardById= async(id)=>{
    try{
        const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data= await res.json();
        //console.log("Risposta alla chiamata GET by ID", data);
        if(!res.ok){
            throw res
        }
        return data
    }catch(res){
        errorHandler2(res)
    }
}

// funzione che mi restituisce le categorie, renderCard

const rendercard=(userId)=>{
    const cardDiv= document.querySelector('.cards-container');
    cardDiv.className='cards-container';
    if(idArray.includes(userId)){
        const card= document.createElement('div');
        card.className='card';
        const cardbutton=document.createElement('button');
        cardbutton.className="completedIndex-Btn";
        cardbutton.textContent= completedArray[userId-2];
        if(cardbutton.textContent==="true"){
            cardbutton.classList.add("done");
            cardbutton.textContent="DONE";
        }else if(cardbutton.textContent==="false"){
            cardbutton.classList.add("not");
            cardbutton.textContent="NOT DONE";
        }
        const idEl= document.createElement('h2');
        idEl.className="id";
        idEl.textContent= `${"ID:"} ${idArray[userId-2]}`;
        const userIdEl= document.createElement('h2');
        userIdEl.className="userId";
        userIdEl.textContent= `${"USER ID:"} ${userIdArray[userId-2]}`;
        const titleEl= document.createElement('p');
        titleEl.className="title";
        titleEl.textContent= `${"TITLE:"} ${titleArray[userId-2]}`;
        const completedEl= document.createElement('h2');
        completedEl.className="completedIndex";
        completedEl.textContent= `${"COMPLETED-INDEX:"} ${completedArray[userId-2]}`;
        if(completedArray[userId-2]===true){
            completedEl.classList.add("true");
        }else{
            completedEl.classList.add("false");
        }
        const categoryEl= document.createElement('h2');
        categoryEl.className="category";
        categoryEl.textContent= `${"CATEGORY ID:"} ${categoryId[userId-2]}`;

        if(Number(categoryId[userId-2])===1){
            card.classList.add("sportCards")
        }else if(Number(categoryId[userId-2])===2){
            card.classList.add("foodCards")
        }else if(Number(categoryId[userId-2])===3){
            card.classList.add("familyCards")
        }else if(Number(categoryId[userId-2])===4){
            card.classList.add("otherCards")
        }
        card.append(cardbutton,idEl,userIdEl,titleEl,completedEl,categoryEl);
        cardDiv.append(card);
    }
}

export {GETcards,getCardById,rendercard};