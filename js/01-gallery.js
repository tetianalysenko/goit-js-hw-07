import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// element ul.gallery
const gallery = document.querySelector(".gallery");

// create gallery
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



gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(
    `<img class="gallery__image" src="${event.target.dataset.source}" >`
    );
        instance.show(); 

    });


    


    
// documentation https://basiclightbox.electerious.com
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()




