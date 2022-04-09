import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery")

galleryEl.style.listStyle = "none";

function addGalleryMarkup(gallery) {
    return gallery.map(({ original, preview, description }) =>
        `
        <li>
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
            </a>
        </li>
        `
    ).join('')
}

galleryEl.innerHTML = addGalleryMarkup(galleryItems)

const instance = new SimpleLightbox('.gallery a', {

    animationSpeed: 250,
    loop: true,
    enableKeyboard: true,
    preloading: true,
    docClose: true,
    captionsData: 'alt',
}
);