import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// <ul class="gallery"></ul>
const gallery = document.querySelector(".gallery");


// create gallery fom task 1
const galleryMarkup = createGallery(galleryItems);

function createGallery (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
                />
            </a>
        </li>`
    }).join('');
};


// add to HTML
gallery.innerHTML = galleryMarkup;



// documentation https://simplelightbox.com

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,

    // caption position
    captionPosition: 'top', 
    // closeText: 'Exit',
    // scrollZoom:	true,
     });

