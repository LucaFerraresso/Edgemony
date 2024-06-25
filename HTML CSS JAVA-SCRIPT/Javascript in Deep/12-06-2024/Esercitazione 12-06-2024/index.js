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
    
    const newProduct={
        title:inputTitleEl.value,
        price:inputPriceEl.value,
        description:inputDescriptionEl.value,
        categoryId:inputCategoryEl.value,
        images:[inputImagesEl.value]
    }
    //al click del addButtonEl ,in console visualizzo l'oggetto che ho appena creato
    console.log("new product", newProduct)
    POST(newProduct)
})




//oggetto da inserire
const ourObj={
    title:"string",
    price:12,
    description:"string",
    categoryId:12,
    images:["https://qweqwe.com"]

}
//url della chiamata
const base_URL = "https://api.escuelajs.co/";
const getProducts = "api/v1/products";

//la chiamata POST accetta due parametri
//limit e offset, dato un limite(8), mi ritorna 8 elementi
//l'offset e' l'indice finale
//con un array a=[1,2,3,4,5,6,7,8]
//con limit= 3, offset = 0, mi ritorna [1,2,3,]
//con limit= 3, offset = 5, mi ritorna [6,7,8]


fetch(`${base_URL}${getProducts}?limit=8&offset=0`)
.then(res=>res.json())
.then(data=>console.log("(DATA) DALLA CHIAMATA, mi aspetto 8 elementi:",data))
//dal data, capisco la natura degli oggetti che accetta :)

const POST= async () =>{
    const res= await fetch(`${base_URL}${getProducts}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ourObj)
    })
    const data = await res.json()
    //console.log("data tradotta da json",res)
    return data.id
    //console.log("id dell'oggetto creato", data.id)
    
    
}
console.log("riposta alla chiamata post, e' il mio oggetto MA ADESSO HA UN ID SPECIFICO" ,await POST());
//IL MIO OGGETTO ora ha un id ,una data di creazione e una data di modifica. tutto generato dall'api
//adesso posso distunguere il mio oggetto, tutto grazie all'id


//chiamata delete
const DELETE= async (id) =>{
    const res= await fetch(`${base_URL}${getProducts}/${id}`,{
        method: 'DELETE',
    })
    const data= await res.json()
    console.log("deleted data", data)
    return data

}

deleteButtonEL.addEventListener('click',async(e)=>{
    e.preventDefault()
    //per conoscere l'id assegnato, dovrei prima fare una chiamata post
    DELETE(newProduct.id)
})










