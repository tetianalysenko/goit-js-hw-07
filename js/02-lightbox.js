import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// <ul class="gallery"></ul>
const gallery = document.querySelector(".gallery");


// create gallery fom task 1
const galleryMarkup = createGallery(galleryItems);

function createGallery (galleryItems) {
    return galleryItems.map((item) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src='${item.preview}'
                data-source='${item.original}'
                alt='${item.description}'
                />
            </a>
        </li>`
    }).join('');
};


// add to HTML
gallery.innerHTML = galleryMarkup;



// documentation https://simplelightbox.com

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,

    // caption position
    captionPosition: 'top', 
    // closeText: 'Exit',
    // scrollZoom:	true,
     });

