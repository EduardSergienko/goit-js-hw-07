import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createGaleryItems() {
	return galleryItems
		.map(
			(item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
		)
		.join("");
}
galleryContainer.innerHTML = createGaleryItems(galleryItems);

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
	basicLightbox
		.create(
			`
		<img  src="${evt.target.getAttribute(["data-source"])}">
	`,
			{
				onShow: (instance) => {
					window.addEventListener("keydown", onEscKeyPress, { once: true });
					function onEscKeyPress(evt) {
						if (evt.code === "Escape") {
							instance.close();
							console.log(evt.code);
						}
					}
				},
			}
		)
		.show();
}
