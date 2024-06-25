//Esercitazione 13-06-2024

//elementi del form

const formEl=document.querySelector('.form');
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
    console.log("ID assegnato dall'API", newProductId)
    POST(newProduct)
})

//DELETE button listener
deleteButtonEL.addEventListener('click',async(e)=>{
    e.preventDefault()
    const idToDelete=prompt("which ID do you want to delete?");
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

    const idToPut=prompt("which ID do you want to edit?");
    putById(editedProduct,idToPut);
    
    console.log("edited product", editedProduct)
})

const product={
    title:"prova",
    price:123,
    description:"questo e un prova",
    categoryId:1,
    images:["https://asdasd.com"]
}


//url della chiamata
const base_URL = "https://api.escuelajs.co/";
const getProducts = "api/v1/products";


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
            console.log(data)
            throw data
        }
        return data.id
    }catch(err){

        const errorEl=document.createElement('h3');
        errorEl.textContent= err.error;
        formEl.insertAdjacentElement('beforebegin',errorEl);
        
        console.warn("(data) arrivata al catch",err);
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
















