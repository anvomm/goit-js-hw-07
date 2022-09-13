import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onClickEvent);

function createGallery() {
    const markup = galleryItems.map(item => {
    const img = `<div class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a></div>`;
    return img;
}).join('');

gallery.insertAdjacentHTML('beforeend', markup);
 }; 

createGallery(); 

function onClickEvent(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`, {onClose: () => {window.removeEventListener('keydown', onEscPressEvent);}});
    instance.show();

    window.addEventListener('keydown', onEscPressEvent);  

    function onEscPressEvent(event) {
    if (event.code === 'Escape') {
        instance.close();
    };  
}
}


