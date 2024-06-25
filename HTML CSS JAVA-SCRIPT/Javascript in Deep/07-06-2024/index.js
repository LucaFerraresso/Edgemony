//faccio la chiamata al nuovo server, e aggiungendo il catch, posso gestire gli errori
//in questo caso se riscontriamo un errore nella fetch, uscira' un messaggio con scritto: "errore nel....."
import {API_KEY} from "./keys.js";

fetch("https://api.themoviedb.org/3/movie/popular",{
    headers:{
        Authorization: `Bearer ${API_KEY}` 
    }
})
.then((res)=>res.json())
//accedo a data per poi generare le card 
.then((data)=>{
    for (let i=0;i<data.results.length;i++){
        const card=document.createElement("div");
        card.className="card";
        const titleEl=document.createElement("h2");
        titleEl.textContent=data.results[i].title;
        //const imgEl=document.createElement("img");
        //imgEl.src=data.results[i].backdrop_path;
        const descriptionEl=document.createElement("p");
        descriptionEl.textContent=data.results[i].overview;
        const releaseDateEl=document.createElement("p");
        releaseDateEl.textContent=data.results[i].release_date;
        const popularityEl=document.createElement("p");
        popularityEl.textContent=data.results[i].popularity;
        const voteAverageEl=document.createElement("p");
        voteAverageEl.textContent=data.results[i].vote_average;

        card.append(titleEl,descriptionEl,releaseDateEl,popularityEl,voteAverageEl);
        cardDIV.appendChild(card);

        console.log(data)}})
.catch((err)=>{
    const errordiv=document.getElementById("div");
    const errortext=document.createElement("p");   
    errortext.textContent="errore nel caricamento della pagina"
    errordiv.appendChild(errortext);
    console.log(err)}
);

//chiamata andata a buon fine :)
const cardDIV=document.querySelector(".card-Container");
console.log(cardDIV);
cardDIV.className="card-Container";


