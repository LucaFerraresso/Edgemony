import { ourButton ,inputEl, cardDiv,filterDiv,searchDiv,searchInput,resetButton} from "./modules/listener.js";
import { Cardcreator ,openModal} from "./modules/components.js";
import { GETcards ,getCardById,rendercard} from "./data/data.js";

export {rendercard};
export {idArray,userIdArray,titleArray,completedArray,categoryId,Data};
export {sportList,foodList,familyList,otherList};


//LA CHIAMATA LA MANDO DENTRO Data.js. questi sono gli array raccolti in risposta
let Data=[];
let idArray=[];
let userIdArray=[];
let titleArray=[];
let completedArray=[];
let categoryId=[];
//creo un array per ogni categoria, aggiunta
let sportList=[];
let foodList=[];
let familyList=[];
let otherList=[];

//creo una funzione per "AVVIARE" la pagina html
const startThePage=()=>{
    GETcards()
    .then((response)=>{
        console.log("Risposta alla chiamata GET",response)
        response.forEach((item)=>{
            Cardcreator(item)
        })
    });
}

//invoco la funzione al LOAD della windows
window.addEventListener("load",()=>{
   
    setTimeout(()=>{
        const indiceDiv=document.createElement('div')
        indiceDiv.className="indiceDiv";
        const indice= document.createElement('h1');
        indice.className="indice";
        indice.textContent="CURRENT ACTIVITIES";
        indiceDiv.append(indice);
        searchDiv.insertAdjacentElement('afterend',indiceDiv);
        startThePage();
    },1500);
});

















