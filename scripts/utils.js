const popupImage = document.querySelector("#image-popup");
const closeButton = document.querySelectorAll(".popup__close_icon");
const overlay = document.querySelectorAll(".popup__overlay");

const popupProfile = document.querySelector(".popup-profile");
const popupPlace = document.querySelector(".popup-place");

export function openPlaceEdit(evt) {
  evt.preventDefault();
  popupPlace.classList.add("popup_open");
}

export function openProfileEdit() {
  popupProfile.classList.add("popup_open");
}

export function close() {
  popupProfile.classList.remove("popup_open");
  popupPlace.classList.remove("popup_open");
  popupImage.classList.remove("popup_open");
}

closeButton.forEach((item) => {
  item.addEventListener("click", close);
});

overlay.forEach((item) => {
  item.addEventListener("click", close);
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    close();
  }
});
