const cards = document.querySelectorAll(".card__item");
const popupPlace = document.querySelector(".popup-place");
const addButton = document.querySelector("#add-button");
const placeInput = document.querySelector("#text-input-place");
const linkInput = document.querySelector("#url-input");
const placeName = document.querySelector(".card__footer-name");
const linkUrl = document.querySelector(".card__item-img");

const editButton = document.querySelector("#edit-button");
const nameInput = document.querySelector("#text-input-name");
const aboutInput = document.querySelector("#text-input-about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-job");
const popupProfile = document.querySelector(".popup-profile");

const popupImage = document.querySelector("#image-popup");
const cardsContainer = document.querySelector(".card");
const overlay = document.querySelectorAll("popup__overlay");

const closeButton = document.querySelectorAll(".popup__close-icon");

editButton.addEventListener("click", function openProfileEdit() {
  popupProfile.classList.add("popup_open");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

const initialCards = [
  {
    name: "Monte Fuji, Japón",
    link: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Templo de Osaka, Japón",
    link: "https://images.unsplash.com/photo-1719360568505-09046429599d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Zona Comercial de Akihabara, Japón",
    link: "https://images.unsplash.com/photo-1625189662357-0f65d0d7377f?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tokyo Skytree",
    link: "https://images.unsplash.com/photo-1592500008427-01ba8bb1cb0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvJTIwc2t5dHJlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Osaka, Japón",
    link: "https://images.unsplash.com/photo-1700569567430-f2db78839180?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Parque de Monos en Jigokudanai",
    link: "https://images.unsplash.com/photo-1674393437372-f0c093aa7b12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

addButton.addEventListener("click", function openPlaceEdit(evt) {
  evt.preventDefault();
  popupPlace.classList.add("popup_open");
});

function createCards(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card__item").cloneNode(true);

  cardElement.querySelector(".card__item-img").src = link;
  cardElement.querySelector(".card__footer-name").textContent = name;
  cardElement.querySelector(".card__item-img").alt = "Foto de " + name;

  cardElement
    .querySelector(".card__delete")
    .addEventListener("click", function (evt) {
      evt.target.closest(".card__item").remove();
    });

  const likeButton = cardElement.querySelector(".card__footer-like");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__footer-like_active");
  });

  cardElement
    .querySelector(".card__item-img")
    .addEventListener("click", function (evt) {
      evt.preventDefault();
      popupImage.classList.add("popup_open");
      popupImage.querySelector(".popup__image").src = link;
      popupImage.querySelector(".popup__title").textContent = name;
      popupImage.querySelector(".popup__image").alt = name;
    });

  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = createCards(item.name, item.link);
  cardsContainer.append(cardElement);
});

function close() {
  popupProfile.classList.remove("popup_open");
  popupPlace.classList.remove("popup_open");
  popupImage.classList.remove("popup_open");
}

closeButton.forEach((item) => {
  item.addEventListener("click", close);
});

overlay.forEach((item) => {
  item.addEventListener("click, close");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    close();
  }
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popupProfile.classList.remove("popup_open");
}

popupProfile.addEventListener("submit", handleProfileFormSubmit);

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCards(placeInput.value, linkInput.value);
  cardsContainer.prepend(cardElement);
  popupPlace.classList.remove("popup_open");

  //placeInput.value = "";
  //linkInput.value = "";
}

popupPlace.addEventListener("submit", handlePlaceFormSubmit);
