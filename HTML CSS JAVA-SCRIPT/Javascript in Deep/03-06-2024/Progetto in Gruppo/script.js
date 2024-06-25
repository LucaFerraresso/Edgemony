import { cards, cardsType } from "./data/cards.js";

import {
    containerCheckGen,
    checkBoxGen,
    labelGen,
    backgroundElGen,
    cardElGen,
    buttonElGen,
    buttonResetElGen,
    buttonAllReset,
    modalElGen
} from "./modules/components.js";

const paragraphEl = document.querySelector('p');
const buttonEl = buttonElGen();
const removeButtonEl = buttonResetElGen();
const restoreButtonEl = buttonAllReset();
const modal = modalElGen();
paragraphEl.insertAdjacentElement('beforeend', buttonEl);
paragraphEl.insertAdjacentElement('beforeend', removeButtonEl);
paragraphEl.insertAdjacentElement('beforeend', restoreButtonEl);
paragraphEl.insertAdjacentElement('beforeend', modal);
const headerEl = document.querySelector('header');
const containerCheck = containerCheckGen();
headerEl.insertAdjacentElement('afterend', containerCheck);

const mainSectionEl = document.querySelector('.container-card');
mainSectionEl.append(backgroundElGen());

let newCard = [{
    name: 'Labello Blu',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, maiores incidunt? Minus quisquam harum magnam.',
    offerte: [
        {
            nomeOfferta: 'Cup',
            img: "./img/cup.png",
            price: '€ 1.00'
        },
        {
            nomeOfferta: 'Cone',
            img: "./img/cone.png",
            price: '€ 1.50'
        },
        {
            nomeOfferta: 'Brioche',
            img: "./img/brioche.png",
            price: '€ 2.00'
        }],
    image: "./img/cono-plus.png",
    animation: 'fadeIn9',
    margin: 'ciao',
    type: 'Vegani'
},
{
    name: 'Valle Incantata',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, maiores incidunt? Minus quisquam harum magnam.',
    offerte: [
        {
            nomeOfferta: 'Cup',
            img: "./img/cup.png",
            price: '€ 1.00'
        },
        {
            nomeOfferta: 'Cone',
            img: "./img/cone.png",
            price: '€ 1.50'
        },
        {
            nomeOfferta: 'Brioche',
            img: "./img/brioche.png",
            price: '€ 2.00'
        }],
    image: "./img/coppa-sorriso.png",
    animation: 'fadeIn10',
    margin: 'ciao',
    type: 'Celiaci'
},
{
    name: 'Foresta Nera',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, maiores incidunt? Minus quisquam harum magnam.',
    offerte: [
        {
            nomeOfferta: 'Cup',
            img: "./img/cup.png",
            price: '€ 1.00'
        },
        {
            nomeOfferta: 'Cone',
            img: "./img/cone.png",
            price: '€ 1.50'
        },
        {
            nomeOfferta: 'Brioche',
            img: "./img/brioche.png",
            price: '€ 2.00'
        }],
    image: "./img/coppa-sorriso.png",
    animation: 'fadeIn10',
    margin: 'ciao',
    type: 'Celiaci'
}]


// Creiamo una copia di cards
const arrayForReset = [].concat(cards);
const arrayForResetNew = [].concat(newCard);

let i = 0;

const createList = () => {

    for (let i = 0; i < cards.length; i++) {

        const cardEl = cardElGen(cards[i]);
        mainSectionEl.append(cardEl);

    }
    return mainSectionEl;
}


const main = createList();

// Funzione per aprire il modal
function openModal() {

    // Rimuove la classe 'hidden' dall'elemento del modal
    modal.classList.remove('hidden');

    // Restituisce l'elemento del modal
    return modal;

}

function getRandomInt(value) {
    return Math.floor(Math.random() * value);
}

let randomValue = 0;

buttonEl.addEventListener('click', function () {
    randomValue = getRandomInt(newCard.length);


    const allEmpty = newCard.every(element => element === "");
    if (allEmpty) {
        const message = document.querySelector('.messageModal');
        message.textContent = 'Ho finito le card da stampare!';
        newCard = [];
        openModal();
        console.log(newCard);
        return;
    }


    while (newCard[randomValue] === '') {
        randomValue = getRandomInt(newCard.length);
    }


    if (newCard[randomValue] !== '') {
        const isValid = cards.some(i => i.name.toLowerCase() === newCard[randomValue].name.toLowerCase());

        if (isValid) {

            console.log('La carta è già presente!');
            openModal();

        } else {
            const newCardGen = cardElGen(newCard[randomValue]);
            cards.push(newCard[randomValue]);
            newCard.splice(randomValue, 1, '');

            main.insertAdjacentElement('beforeend', newCardGen);

        }
    }
}
)



removeButtonEl.addEventListener('click', function () {
    // Genera un numero casuale che rappresenta l'indice della carta da rimuovere

    randomValue = getRandomInt(cards.length);
    console.log(randomValue);

    // Controlla se non ci sono carte
    if (cards.length === 0) {

        // Mostra un messaggio nel modal se non ci sono carte
        const message = document.querySelector('.messageModal');
        message.textContent = 'Ho rimosso tutte le cards!';
        openModal();

    } else {
        // Se l'indice casuale corrisponde alla lunghezza dell'array, rimuovi l'ultima carta
        if (cards.length === randomValue) {

            const cardDelete = cards.pop();

            // Pulisce il contenuto principale e aggiunge lo sfondo
            main.innerHTML = '';
            main.append(backgroundElGen());

            // Ricostruisce il DOM con le carte rimanenti
            for (let i = 0; i < cards.length; i++) {
                const defaultMain = cardElGen(cards[i]);
                main.append(defaultMain);
            }


        } else {

            // Altrimenti, rimuovi la carta corrispondente all'indice casuale
            const cardDelete = cards.splice(randomValue, 1);
            // Pulisce il contenuto principale e aggiunge lo sfondo
            main.innerHTML = '';
            main.append(backgroundElGen());
            // Ricostruisce il DOM con le carte rimanenti

            for (let i = 0; i < cards.length; i++) {
                const defaultMain = cardElGen(cards[i]);
                main.append(defaultMain);
            }
            // Se non ci sono più carte rimanenti, mostra un messaggio nel modal
            if (cards.length === 0) {

                const message = document.querySelector('.messageModal');
                message.textContent = 'Ho rimosso tutte le cards!';
                openModal();

            }
        }
    }
})

restoreButtonEl.addEventListener('click', function () {

    if (newCard.length >= 0) {
        // Concatena le carte originali con quelle nel backup
        document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.checked = false;
        })
        newCard = [];
        const defaultList = newCard.concat(arrayForResetNew);
        for (let i = 0; i < defaultList.length; i++) {
            newCard.push(defaultList[i]);
        }
    }
    // Verifica se non ci sono carte attualmente 
    if (cards.length >= 0) {
        console.log(cards, cards.length);
        // Concatena le carte originali con quelle nel backup
        document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.checked = false;
        })
        cards.length = 0;
        console.log(cards);
        const defaultList = cards.concat(arrayForReset);
        // Pulisce il contenuto principale e aggiunge lo sfondo
        main.innerHTML = '';
        main.append(backgroundElGen());
        for (let i = 0; i < defaultList.length; i++) {
            cards.push(defaultList[i]);
        }
        // Ricostruisce il DOM con le carte ripristinate
        for (let i = 0; i < cards.length; i++) {

            const defaultMain = cardElGen(cards[i]);
            main.append(defaultMain);
        }
    }
})

modal.addEventListener('click', function () {

    modal.classList.add('hidden');
})
let newArray = [];

const renderTypeCard = (type) => {
    cardsType.forEach(type => {
        const checkBoxEl = checkBoxGen(`${type}`);
        const labelEl = labelGen(`${type}`);
        checkBoxEl.id = type;
        labelEl.textContent = checkBoxEl.id;
        containerCheck.append(checkBoxEl, labelEl);

        checkBoxEl.addEventListener("change", function () {
            updateDisplayedCards();

        })
    })
}

const updateDisplayedCards = () => {

    // Ottieni tutti i checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let newArray = [];

    checkboxes.forEach(checkbox => {

        const allUnchecked = Array.from(checkboxes).every(checkbox => !checkbox.checked);

        if (allUnchecked) {

            main.innerHTML = '';
            main.append(backgroundElGen());

            for (let i = 0; i < cards.length; i++) {
                const defaultMain = cardElGen(cards[i]);
                main.append(defaultMain);
            }

            return main;

        } else {

            if (checkbox.checked) {

                main.innerHTML = '';
                main.append(backgroundElGen());

                const filteredCards = cards.filter(item => item.type === checkbox.id);
                newArray = newArray.concat(filteredCards);
                console.log(filteredCards);

                for (let i = 0; i < newArray.length; i++) {
                    const newFilteredCards = cardElGen(newArray[i]);
                    main.append(newFilteredCards);
                }

            }
        }
        return main;
    });

}

console.log(main);

const filterBarEl = renderTypeCard();
console.log(filterBarEl);


window.onload = main;

