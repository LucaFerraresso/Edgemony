const backgroundElGen = () => {
    const container = document.createElement('div');
    container.className = 'img-background-card';
    const imageBackground = document.createElement('img');
    imageBackground.src = "./img/background-cards.jpg";
    imageBackground.alt = 'immagine di sfondo';
    imageBackground.width = 300;
    container.append(imageBackground);
    return container;
}

const buttonElGen = () => {
    const buttonEl = document.createElement('button');
    const imageEl = document.createElement('img');
    imageEl.src = './img/button.png';
    imageEl.alt = "bottone aggiungi";
    imageEl.width = 50;
    imageEl.title = "Add cards!";
    buttonEl.append(imageEl);
    return buttonEl;
}

const buttonResetElGen = () => {
    const buttonEl = document.createElement('button');
    const imageEl = document.createElement('img');
    imageEl.src = './img/x-icecream.png';
    imageEl.alt = "bottone rimuovi";
    imageEl.width = 50;
    imageEl.title = "Remove cards!";
    buttonEl.append(imageEl);
    return buttonEl;
}

const buttonAllReset = () => {
    const buttonEl = document.createElement('button');
    const imageEl = document.createElement('img');
    imageEl.src = './img/reset.png';
    imageEl.alt = "bottone reset";
    imageEl.width = 50;
    imageEl.title = "Bottone refresh cards!";
    buttonEl.append(imageEl);
    return buttonEl;
}

const modalElGen = () => {
    // Crea un div container per la modale
    const containerEl = document.createElement('div');
    containerEl.id = 'modal';// Imposta l'id dell'elemento
    containerEl.className = 'hidden';// Aggiunge la classe 'hidden' per nascondere inizialmente la modale
    // Crea un pulsante per chiudere la modale
    const closeBtnEl = document.createElement('button');
    closeBtnEl.id = 'close-modal';// Imposta l'id del pulsante
    // Crea un'immagine per il pulsante di chiusura
    const imageCloseBtnEl = document.createElement('img');
    imageCloseBtnEl.src = "./img/x-icecream.png";// Imposta il percorso dell'immagine
    imageCloseBtnEl.alt = "close-image";// Imposta l'attributo alt per l'immagine
    imageCloseBtnEl.width = 20; // Imposta la larghezza dell'immagine
    imageCloseBtnEl.title = "Close Me!";// Imposta il titolo dell'immagine
    // Crea un elemento paragrafo per il testo della modale
    const paragrafModalEl = document.createElement('p');
    paragrafModalEl.className = 'messageModal';
    paragrafModalEl.textContent = 'Attenzione, la carta è già presente!';
    // Aggiunge l'immagine al pulsante di chiusura
    closeBtnEl.append(imageCloseBtnEl);
    // Aggiunge il pulsante di chiusura e il paragrafo al container della modale

    containerEl.append(closeBtnEl, paragrafModalEl);
    // Restituisce l'elemento container che rappresenta la modale

    return containerEl;
}

const cardElGen = (obj) => {
    const border1 = document.createElement('div');
    border1.className = 'border-card1';
    border1.classList.add('fadeIn', obj.animation);


    const border2 = document.createElement('div');
    border2.className = 'border-card2';

    /* crea main card */
    const container = document.createElement('div');
    container.className = 'card';

    const titleCard = document.createElement('h2');
    titleCard.className = 'card__name';
    titleCard.textContent = obj.name;

    const paragrafCard = document.createElement('p');
    paragrafCard.className = 'card__paragraph';
    paragrafCard.textContent = obj.description;

    /* crea contenitore cup-cone-brioche */
    const containerOffer = document.createElement('div');
    containerOffer.className = 'container-price';

    /* crea contenitore offerta cup */
    const containerOfferCup = document.createElement('div');
    containerOfferCup.className = 'price__littleCard';

    const titleOfferCup = document.createElement('h3');
    titleOfferCup.className = 'price__name';
    titleOfferCup.textContent = obj.offerte[0].nomeOfferta;

    const imageOfferCup = document.createElement('img');
    imageOfferCup.src = obj.offerte[0].img;
    imageOfferCup.className = 'price__img';
    imageOfferCup.width = 50;
    imageOfferCup.height = 50;
    imageOfferCup.alt = 'icona gelato';

    const priceOfferCup = document.createElement('span');
    priceOfferCup.className = 'price__price';
    priceOfferCup.textContent = obj.offerte[0].price;


    /* crea contenitore offerta cone */
    const containerOfferCone = document.createElement('div');
    containerOfferCone.className = 'price__littleCard';

    const titleOfferCone = document.createElement('h3');
    titleOfferCone.className = 'price__name';
    titleOfferCone.textContent = obj.offerte[1].nomeOfferta;

    const imageOfferCone = document.createElement('img');
    imageOfferCone.src = obj.offerte[1].img;
    imageOfferCone.className = 'price__img';
    imageOfferCone.width = 50;
    imageOfferCone.height = 50;
    imageOfferCone.alt = 'icona gelato';

    const priceOfferCone = document.createElement('span');
    priceOfferCone.className = 'price__price';
    priceOfferCone.textContent = obj.offerte[1].price;

    /* crea contenitore offerta brioche */
    const containerOfferBrioche = document.createElement('div');
    containerOfferBrioche.className = 'price__littleCard';

    const titleOfferBrioche = document.createElement('h3');
    titleOfferBrioche.className = 'price__name';
    titleOfferBrioche.textContent = obj.offerte[2].nomeOfferta;

    const imageOfferBrioche = document.createElement('img');
    imageOfferBrioche.src = obj.offerte[2].img;
    imageOfferBrioche.className = 'price__img';
    imageOfferBrioche.width = 50;
    imageOfferBrioche.height = 50;
    imageOfferBrioche.alt = 'icona gelato';

    const priceOfferBrioche = document.createElement('span');
    priceOfferBrioche.className = 'price__price';
    priceOfferBrioche.textContent = obj.offerte[2].price;

    /* crea immagine fondo card */
    const imageCard = document.createElement('img');
    imageCard.src = obj.image;
    imageCard.className = 'card__img';
    imageCard.classList.add('margin-top', obj.margin);
    imageCard.width = 150;
    imageCard.alt = 'icona gelato';


    containerOfferCup.append(titleOfferCup, imageOfferCup, priceOfferCup);
    containerOfferCone.append(titleOfferCone, imageOfferCone, priceOfferCone);
    containerOfferBrioche.append(titleOfferBrioche, imageOfferBrioche, priceOfferBrioche);

    containerOffer.append(containerOfferCup, containerOfferCone, containerOfferBrioche);

    container.append(titleCard, paragrafCard, containerOffer, imageCard);
    border2.append(container);
    border1.append(border2);
    return border1;
}


const containerCheckGen = () => {
    const filterContainerEl = document.createElement('div');
    filterContainerEl.className = 'filter-container';
    const paragrafFilterEl = document.createElement('p');
    paragrafFilterEl.textContent = 'Filtri:';
    filterContainerEl.append(paragrafFilterEl);

    return filterContainerEl;
}

const checkBoxGen = () => {
    const inputCheckEl = document.createElement('input');
    inputCheckEl.type = 'checkbox';
    return inputCheckEl;
}

const labelGen = () => {
    const labelEl = document.createElement('label');
    return labelEl;

}

export {
    containerCheckGen,
    checkBoxGen,
    labelGen,
    backgroundElGen,
    cardElGen,
    buttonElGen,
    buttonResetElGen,
    buttonAllReset,
    modalElGen
}


