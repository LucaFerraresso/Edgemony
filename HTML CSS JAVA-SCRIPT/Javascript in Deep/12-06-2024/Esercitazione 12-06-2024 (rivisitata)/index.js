//chiamata post e delete con un nuovo api

const inputTitleEl=document.querySelector('.title')
const inputPriceEl=document.querySelector('.price')
const inputDescriptionEl=document.querySelector('.description')
const inputCategoryEl=document.querySelector('.category-id')
const inputImagesEl=document.querySelector('.images')

const addButtonEL=document.querySelector('.add-product')
const deleteButtonEL=document.querySelector('.delete-product')

addButtonEL.addEventListener('click',async(e)=>{
    //siamo in un form, evito il refresh della pagina
    e.preventDefault()
    
    const newProduct=({
        title: toString(inputTitleEl.value),
        price:Number(inputPriceEl.value),
        description:toString(inputDescriptionEl.value),
        categoryId:Number(inputCategoryEl.value),
        images:[inputImagesEl.value]
    });
    //al click del addButtonEl ,in console visualizzo l'oggetto che ho appena creato
    console.log("new product", newProduct)
    POST(newProduct)
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
const getProducts = "api/v1/products/";


const POST= async (product) =>{
    const res= await fetch(`${base_URL}${getProducts}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    const data= await res.json()
    console.log("risposta alla chiamata POST, {objToPush con api Id} ", data)

    //console.log("data tradotta da json",res)
    //console.log("id dell'oggetto creato", data.id)
    console.log(data.id)
    return data 

    
    
}
POST(product)
//console.log("riposta alla chiamata post, e' il mio oggetto MA ADESSO HA UN ID SPECIFICO" ,await POST());
//IL MIO OGGETTO ora ha un id ,una data di creazione e una data di modifica. tutto generato dall'api
//adesso posso distunguere il mio oggetto, tutto grazie all'id

const DELETE= async (id) =>{
    const res= await fetch(`${base_URL}${getProducts}${id}`,{
        method: "DELETE",
    })
};
//aggiunto l'elemento, ricevo a mia volta un id. posso eliminare il mio oggeto sfruttando questo id
//il mio id e' 418
//DELETE(Number(objToPush.id)) //id dell'oggetto da cancellare
//console.log("riposta alla chiamata delete, e' il mio oggetto MA ADESSO HA UN ID SPECIFICO", await DELETE(212));














