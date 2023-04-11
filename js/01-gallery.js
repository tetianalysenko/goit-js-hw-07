import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

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
    
    if(event.target.nodeName !== 'IMG') {    
        // console.log('not IMG');
        return
    }

    const instance = basicLightbox.create(
    `<img class="gallery__image" src="${event.target.dataset.source}",
     alt = ${event.target.alt},
      >`,
        )

    instance.show();

    
    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape') {
            instance.close(); }
    });


})


    
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



// =============================== --- using forEach() --- ======================================

// let listGallery = '';

// galleryItems.forEach ((item) => {
//  listGallery += 
//     `       
//     <li class="gallery__item">
//         <a class="gallery__link" href="large-image.jpg">
//             <img
//                 class="gallery__image"
//                 src="${item.preview}"
//                 data-source="${item.original}"
//                 alt="${item.description}"
//             />
//         </a>
//     </li>   
// `
// });


// gallery.innerHTML = listGallery;


// gallery.addEventListener('click', (event) => {
//     event.preventDefault();

//     const instance = basicLightbox.create(
//     `<img class="gallery__image" src="${event.target.dataset.source}" >`
//     );
//         instance.show(); 

//     });