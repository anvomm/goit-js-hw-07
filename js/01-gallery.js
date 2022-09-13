import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery() {
    const markup = galleryItems.map(item => {
    const img = `<div class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a></div>`;
    return img;
}).join('');

gallery.insertAdjacentHTML('beforeend', markup);
 }; 


/* instance.show() */
createGallery(); 


/* const images = document.querySelectorAll('.gallery__image');
images.forEach(img => {
    const instance = basicLightbox.create(
	img
)
}) */
gallery.addEventListener('click', onClickEvent);

function onClickEvent(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
    basicLightbox.create(`<img src=${event.target.dataset.source}>`).show();

    /* event.target);
    event.target.src = event.target.dataset.source; */
}

/* const instance = basicLightbox.create(
    markup,
    {
	visible: true
}
);
gallery.insertAdjacentHTML('beforeend', instance); */

/* const instance = basicLightbox.create(
	gallery
) */
/* console.log(basicLightbox.visible()) */