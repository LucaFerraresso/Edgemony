//messaggi d'errore
const errorTitleEl=document.querySelector('.title-error')
const errorPriceEl=document.querySelector('.price-error')
const errorDescriptionEl=document.querySelector('.description-error')
const errorCategoryEl=document.querySelector('.category-error')
const errorImagesEl=document.querySelector('.images-error')

const errorHandler=(err)=>{
    const errorEl=document.createElement('h3');
        errorEl.textContent= `${err.statusCode}-${err.error}`;
        //l'errore rimane finche' non viene corretto, una volta corretto ,l'errore sparisce
        errorTitleEl.innerHTML="";
        errorPriceEl.innerHTML="";
        errorDescriptionEl.innerHTML="";
        errorCategoryEl.innerHTML="";
        errorImagesEl.innerHTML="";

        err.message.forEach(message=>{
            if(message.toLowerCase().includes("title")){
                errorTitleEl.textContent=message
                return
            }
            if (message.toLowerCase().includes("price")){
                errorPriceEl.textContent=message
                return
            }
            if (message.toLowerCase().includes("description")){
                errorDescriptionEl.textContent=message
                return
            }
            if (message.toLowerCase().includes("category")){
                errorCategoryEl.textContent=message
                return
            }
            if (message.toLowerCase().includes("images")){
                errorImagesEl.textContent=message
                return
            }
        })
        console.warn("(data) arrivata al catch",`${err.statusCode}-${err.error}`);
}

export default errorHandler