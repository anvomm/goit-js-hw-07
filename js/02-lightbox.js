import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery() {
    const markup = galleryItems.map(item => {
    const img = `<a class="gallery__item" href=${item.original}><img class="gallery__image" src=${item.preview} alt=${item.description} /></a>`;
    return img;
}).join('');

gallery.insertAdjacentHTML('beforeend', markup);
 }; 

createGallery(); 

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });