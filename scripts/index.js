import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import { openPlaceEdit, openProfileEdit } from "./utils.js";

const popupPlace = document.querySelector(".popup-place");
const popupProfile = document.querySelector(".popup-profile");

const addButton = document.querySelector("#add-button");
const placeInput = document.querySelector("#text-input-place");
const linkInput = document.querySelector("#url-input");

const editButton = document.querySelector("#edit-button");
const nameInput = document.querySelector("#text-input-name");
const aboutInput = document.querySelector("#text-input-about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-job");

const cardsContainer = document.querySelector(".card");
const fieldsetList = document.querySelector(".popup__container");

const initialCards = [
  {
    Name: "Monte Fuji, Japón",
    link: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Name: "Templo de Osaka, Japón",
    link: "https://images.unsplash.com/photo-1719360568505-09046429599d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Name: "Zona Comercial de Akihabara, Japón",
    link: "https://images.unsplash.com/photo-1625189662357-0f65d0d7377f?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Name: "Tokyo Skytree",
    link: "https://images.unsplash.com/photo-1592500008427-01ba8bb1cb0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvJTIwc2t5dHJlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Name: "Osaka, Japón",
    link: "https://images.unsplash.com/photo-1700569567430-f2db78839180?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Name: "Parque de Monos en Jigokudanai",
    link: "https://images.unsplash.com/photo-1674393437372-f0c093aa7b12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

initialCards.forEach((card) => {
  const newCard = new Card(card.Name, card.link, "#card-template");
  const cardElement = newCard.createCard();
  document.querySelector(".card").append(cardElement);
});

const newValidation = new FormValidator(
  {
    formSelector: document.querySelector(".popup__admin"),
    inputSelector: document.querySelectorAll(".popup__input"),
    submitButtonSelector: document.querySelector(".popup__button-save"),
    inactiveButtonClass: document.querySelector("popup__button-save_disabled"),
    inputErrorClass: document.querySelector("popup__input_type_error"),
    errorClass: document.querySelector("popup__error_visible"),
  },
  fieldsetList
);

newValidation.enableValidation();

editButton.addEventListener("click", openProfileEdit);

addButton.addEventListener("click", openPlaceEdit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popupProfile.classList.remove("popup_open");
}

popupProfile.addEventListener("submit", handleProfileFormSubmit);

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(placeInput.value, linkInput.value, "#card-template");
  const cardElement = newCard.createCard();
  cardsContainer.prepend(cardElement);
  popupPlace.classList.remove("popup_open");
}

popupPlace.addEventListener("submit", handlePlaceFormSubmit);
