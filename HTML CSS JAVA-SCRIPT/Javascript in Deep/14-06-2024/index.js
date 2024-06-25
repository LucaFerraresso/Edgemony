//Esercitazione 14-06-2024
//ora si possono fare le operazioni piu' velocemente :)
//il pulsante CHECK stampa a dom l'oggetto ottenuto per id. (id inserito nell'input id)
//il pulsante DELETE, non chiede piu' l'id attraverso un prompt, ma prende quello stampato a dom
//quindi prima di eliminare un'oggetto,prima lo devi caricare a DOM

//il pulsante SEND, restituisce in console l'oggetto
//E complita in automatico in campo input Id (inputIdEl) con l'id assegnato DALL'API

//l'unico buttone che si avvale ancora di un prompt è il buttone GET
//OBSOLETO dal momento che abbiamo un pulsante CHECK
//LO TENGO PER SFIZIO.NON SI SA MAI :)

import errorHandler from "./errorHandler.js";

//elementi nel DOM
//main container
//const formEl=document.querySelector('.form');
//sezione check-product
const inputIdCheck=document.querySelector('.check-Id')

//sezioni input
const inputTitleEl=document.querySelector('.title')
const inputPriceEl=document.querySelector('.price')
const inputDescriptionEl=document.querySelector('.description')
const inputCategoryEl=document.querySelector('.category-id')
const inputImagesEl=document.querySelector('.images')

//bottoni
const addButtonEL=document.querySelector('.add-product')
const deleteButtonEL=document.querySelector('.delete-product')
const getProductsEL=document.querySelector('.get-product')
const putProductEL=document.querySelector('.put-product')
//bottone sezione check-product
const checkButtonEl=document.querySelector('.check-product')

//iniziamo

//CHECK button listener
checkButtonEl.addEventListener('click',async(e)=>{
    e.preventDefault()
    const idToCheck= inputIdCheck.value;
    const checkedProduct= await getById(idToCheck)
    
    //console.log("checkedProduct", JSON.stringify(checkedProduct));
    inputTitleEl.value=JSON.stringify(checkedProduct.title);
    inputPriceEl.value=checkedProduct.price;
    inputDescriptionEl.value=checkedProduct.description;
    inputCategoryEl.value=Number(checkedProduct.category.id);
    inputImagesEl.value=checkedProduct.images.join('').replace(/[\[\]"]/g, '');
})
    
//ADD button listener
addButtonEL.addEventListener('click',async(e)=>{
    //siamo in un form, evito il refresh della pagina
    e.preventDefault()
    
    const newProduct=({
        title: toString(inputTitleEl.value),
        price:Number(inputPriceEl.value),
        description:(inputDescriptionEl.value),
        categoryId:Number(inputCategoryEl.value),
        images:[inputImagesEl.value]
    });
    const newProductId= await POST(newProduct);
    inputIdCheck.value=newProductId;
    console.log("ID assegnato dall'API", newProductId)
    //POST(newProduct)
})

//DELETE button listener
deleteButtonEL.addEventListener('click',async(e)=>{
    e.preventDefault()
    const idToDelete=Number(inputIdCheck.value);
    //console.log("idToDelete", idToDelete)
    deleteById(idToDelete);
})

//GET button listener
getProductsEL.addEventListener('click',async(e)=>{
    e.preventDefault()
    const idToGet=prompt("which ID do you want to get?");
    getById(idToGet);
})

//PUT button listener
putProductEL.addEventListener('click',async(e)=>{
    e.preventDefault()
    const editedProduct={
        title: toString(inputTitleEl.value),
        price:inputPriceEl.value,
        description:inputDescriptionEl.value,
        categoryId:inputCategoryEl.value,
        images:[inputImagesEl.value]
    }
    const idToPut=Number(inputIdCheck.value);
    //console.log("idToPut", idToPut)
    putById(editedProduct,idToPut);
    
    console.log("edited product", editedProduct)
})

//url della chiamata
const base_URL = "https://api.escuelajs.co/";
const getProducts = "api/v1/products";

//funzione per mandare dati al database con una chiamata POST
const POST= async (product) =>{
    try{
        const res= await fetch(`${base_URL}${getProducts}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
        })
        const data= await res.json()
        if(data.error){
            if(product.categoryId===0){
                data.message.push("category must be a positive number")
            }
            console.log(data)
            throw data
        }
        
        return data.id
    }catch(err){
        errorHandler(err)
    }
        
    
}

//funzione per eliminare un oggetto attraverso il suo id
const deleteById= async (id) =>{
    const res= await fetch(`${base_URL}${getProducts}/${id}`,{
        method: "DELETE",
    })
    const data= await res.json();
    console.log(`[risposta alla chiamata DELETE] {obj with id:${id} deleted} `, data)
};

//funzione per chiamare un oggetto attraverso il suo id 
const getById= async (id) =>{
    const res= await fetch(`${base_URL}${getProducts}/${id}`,{
        method: "GET",
    })
    const data= await res.json();
    console.log(`[risposta alla chiamata GET] {obj with id:${id}} `, data)
    return data
};

//funzione per modficare un oggetto attraverso il suo id
const putById= async (product,id) =>{
    const res= await fetch(`${base_URL}${getProducts}/${id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    const data= await res.json();
    return data.id

};
















