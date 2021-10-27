/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// reference
const refImg = document.querySelector('.images');
const refThumb = document.querySelector('.thumbs');

// indice img 
let imgActive = 0;

// injection html
for (let i = 0; i < titleCollection.length; i++) {

    // images reference
    refImg.innerHTML += `
    <div class="image-container">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>`;

    // thumbs reference
    refThumb.innerHTML += `
    <div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>`;
}

// active action setup
document.getElementsByClassName('image-container')[imgActive].classList.add('active');
document.getElementsByClassName('thumb')[imgActive].classList.add('active');

// click action
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    if ( (imgActive) === (titleCollection.length) - 1) {
        imgActive = 0;
    } else {
        imgActive++;
    }

    // reset active img and set active on next img
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[imgActive].classList.add('active');

    // reset active thumb and set active on next thumb
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[imgActive].classList.add('active');
})

prev.addEventListener('click', function() {
    if (imgActive === 0) {
        imgActive = 4
     } else {
        imgActive--;
    }

    // reset active img and set active on next img
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[imgActive].classList.add('active');

    // reset active thumb and set active on next thumb
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[imgActive].classList.add('active');
})