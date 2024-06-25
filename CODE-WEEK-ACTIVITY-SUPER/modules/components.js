// DIV contenitore

const cardDiv= document.querySelector('.cards-container');
cardDiv.className='cards-container';

// funzione card creator

const Cardcreator=(array)=>{
    const card= document.createElement('div');
    card.className="card";
    const ButtonCompletedIndex=document.createElement('button');
    ButtonCompletedIndex.className="completedIndex-Btn";
    ButtonCompletedIndex.textContent=array.completed;
    if(ButtonCompletedIndex.textContent==="true"){
        ButtonCompletedIndex.classList.add("done");
        ButtonCompletedIndex.textContent='DONE';
    }else if(ButtonCompletedIndex.textContent==="false"){
        ButtonCompletedIndex.classList.add("not");
        ButtonCompletedIndex.textContent=' NOT DONE ';
    }
    const idEl= document.createElement('h2');
    idEl.className="id";
    idEl.textContent=`${"ID:"} ${array.id}`;
    const userIdEl= document.createElement('h2');
    userIdEl.className="userId";
    userIdEl.textContent=`${"USER ID:"} ${array.userId}`;
    const titleEl= document.createElement('p');
    titleEl.className="title";
    titleEl.textContent=`${"TITLE:"} ${array.title}`;
    const completedEl= document.createElement('h2');
    completedEl.className="completedIndex";
    completedEl.textContent= `${"COMPLETED-INDEX:"} ${array.completed}`;
    if(array.completed===true){ 
        completedEl.classList.add("true");
    }else if(array.completed===false){ 
        completedEl.classList.add("false");
    }
    const categoryEl= document.createElement('h2');
    categoryEl.className="category";
    categoryEl.textContent= `${"CATEGORY ID:"} ${array.category}`;
    //adesso aggiungo una classe in base al valore di array.category
    //in modo da visualizzare le card in maniera diversa in base alla categoria
    if(array.category===1){
        card.classList.add("sportCards");
    }else if(array.category===2){
        card.classList.add("foodCards");
    }else if(array.category===3){
        card.classList.add("familyCards");
    }else if(array.category===4){
        card.classList.add("otherCards");
    }
    card.append(ButtonCompletedIndex,idEl, userIdEl, titleEl, completedEl, categoryEl);
    cardDiv.append(card);
    
    return card;
}

//funzione per aprire la modale'
const openModal= (e)=>{
    const modal= document.createElement('div');
    modal.className='modal';
    
    const modalContent= document.createElement('div');
    modalContent.className='modal-content';
    
    const modalContentText=document.createElement('div');
    modalContentText.className='modal-content-text';
    
    const idcontentText= document.createElement('h2');
    idcontentText.className='id';
    idcontentText.textContent=`ID: ${e.querySelector('.id').textContent.split(':')[1].trim()}`;
    const userIdcontentText= document.createElement('h2');
    userIdcontentText.className='userId';
    userIdcontentText.textContent=`USER ID: ${e.querySelector('.userId').textContent.split(':')[1].trim()}`;
    const titlecontentText= document.createElement('p');
    titlecontentText.className='title';
    titlecontentText.textContent=`TITLE: ${e.querySelector('.title').textContent.split(':')[1].trim()}`;
    const completedcontentText= document.createElement('h2');
    completedcontentText.className='completedIndex';
    completedcontentText.textContent=`COMPLETED-INDEX: ${e.querySelector('.completedIndex').textContent.split(':')[1].trim()}`;
    if(e.querySelector('.completedIndex').textContent.split(':')[1].trim()==="true"){
        completedcontentText.classList.add("true");
    }else if(e.querySelector('.completedIndex').textContent.split(':')[1].trim()==="false"){
        completedcontentText.classList.add("false");
    }
    const categorycontentText= document.createElement('h2');
    categorycontentText.className='category';
    categorycontentText.textContent=`CATEGORY ID: ${e.querySelector('.category').textContent.split(':')[1].trim()}`;
    //adesso assemblo tutto dentro a modal-container-text
    //container di destra, con tutte le informazioni della card
    modalContentText.append(idcontentText, userIdcontentText, titlecontentText, completedcontentText, categorycontentText);

    //modale,container con solo lo sfondo
    const idContent= document.createElement('h2');
    idContent.className='id';
    
    const userIdContent= document.createElement('h2');
    userIdContent.className='userId';
    
    const titleContent= document.createElement('p');
    titleContent.className='title';
   
    const completedContent= document.createElement('h2');
    completedContent.className='completedIndex';

    const categoryContent= document.createElement('h2');
    categoryContent.className='category';
    const categoryModal=e.querySelector('.category').textContent.split(':')[1].trim();
   
    //e' una stringa,devo convertirla in numero
    //adesso coloro la card generata in base al valore del loro category ID
    if(Number(categoryModal)===1){
        modalContent.classList.add("sportCards")
    }else if(Number(categoryModal)===2){
        modalContent.classList.add("foodCards")
    }else if(Number(categoryModal)===3){
        modalContent.classList.add("familyCards")
    }else if(Number(categoryModal)===4){
        modalContent.classList.add("otherCards")
    }
    const closeBtn=document.createElement('button');
    closeBtn.className='close-button';
    closeBtn.textContent='X';
    closeBtn.addEventListener('click', ()=>{
        modal.remove();
    })
    modalContent.append(idContent, userIdContent, titleContent, completedContent, categoryContent);
    modal.append(modalContent, modalContentText, closeBtn);
    e.insertAdjacentElement('afterend',modal);
}
  

export {Cardcreator,openModal};