//ESERCIZIO 1:effettua una chiamata al https://fakestoreapi.com/products
//usa fetch e then
//stampa in console l'array di oggetti, comprensibili a java

fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        let itemsId=[];
        for(let i=0; i<data.length; i++){
            //mi salvo subito gli id dentro un array
            //mi seviranno piu' avanti per filtrare gli items
            itemsId.push(data[i].id);

            //creo la card e i suoi elementi
            const card=document.createElement('div');
            card.className="card";
            const cardImgEl=document.createElement('img');
            cardImgEl.src=data[i].image;
            //assegno una grandezza all'immagine
            cardImgEl.height=150;
            cardImgEl.width=150;
            //const ideL=document.createElement('h3')
            //ideL.textContent= data[i].id;
            const itemName=document.createElement('h2');
            itemName.textContent=data[i].title;
            //const description=document.createElement('p');
            //description.textContent=data[i].description;
            //l'ho commentata perche' mi deformava troppo la card
            const itemPrice=document.createElement('span'); 
            itemPrice.textContent=data[i].price;
            const cardBtn=document.createElement('button');
            cardBtn.className="cardBtn";
            cardBtn.textContent="SCEGLI";
            //assemblo la card
            card.append(cardImgEl,itemName,itemPrice,cardBtn);
            //assemblo le card al container
            cardContainer.insertAdjacentElement('beforebegin',filterBtn);
            cardContainer.append(card);
        }
        console.log("raccolgo tutti gli id:",itemsId);
        

    console.log("res.json rende comprensibile la res",data);

});
//mi aggangcio al container principale
const cardContainer=document.querySelector('.card-Container');
//creo un bottone per aprire/chiudere la visualizzazione delle card
const btn=document.createElement('button');
btn.className="opener-Btn";
btn.textContent="Load Your Items";
//evento che al click mi aggiunge un id al container
btn.addEventListener('click', ()=>{
    cardContainer.id='card-Container';
})

//creo la mia modale per filtrare gli items
//creo una checkbox per filtrare gli items

const checkbox=document.createElement('div');
checkbox.className="checkbox";

const input1=document.createElement('input');
input1.type="checkbox";
const label1=document.createElement('label');
label1.textContent="Borse";
const input2=document.createElement('input');
input2.type="checkbox";
const label2=document.createElement('label');   
label2.textContent="Gioielli"
const input3=document.createElement('input');
input3.type="checkbox";
const label3=document.createElement('label');
label3.textContent="Elettronica";
const input4=document.createElement('input');
input4.type="checkbox";
const label4=document.createElement('label');
label4.textContent="abbigliamento";

checkbox.append(label1,input1);
checkbox.append(label2, input2);   
checkbox.append(label3, input3);    
checkbox.append(label4, input4);

cardContainer.insertAdjacentElement('beforebegin', checkbox);

//creo un bottone capace che mi apre la madale
//la modale e' una checkbox che divide gli items in categorie
const filterBtn=document.createElement('button');
filterBtn.className="opener-Btn";
filterBtn.textContent="Filter Your Item";
filterBtn.addEventListener('click',()=>{
    checkbox.id="checkbox";
})

cardContainer.insertAdjacentElement('beforebegin',btn);
