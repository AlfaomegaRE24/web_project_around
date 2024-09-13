export default class Card {
  constructor(Name, link, templateSelector) {
    this._Name = Name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);

    return cardTemplate;
  }

  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__item-img").src = this._link;
    this._element.querySelector(".card__footer-name").textContent = this._Name;
    this._element.querySelector(".card__item-img").alt =
      "Foto de " + this._Name;

    this._element
      .querySelector(".card__footer-like")
      .addEventListener("click", () => this._like());

    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => this._delete());

    this._element
      .querySelector(".card__item-img")
      .addEventListener("click", () => this._handleImg());

    return this._element;
  }

  _like() {
    const activeLike = this._element.querySelector(".card__footer-like");
    activeLike.classList.toggle(".card__footer-like_active");
  }

  _delete() {
    const deleteImg = this._element.querySelector(".card__delete");
    deleteImg.classList.closest(".card__item").remove();
  }

  _handleImg() {
    const popupImage = document.querySelector("#image-popup");

    popupImage.classList.add("popup_open");
    popupImage.querySelector(".popup__image").src = this._link;
    popupImage.querySelector(".popup__title").textContent = this._Name;
    popupImage.querySelector(".popup__image").alt = this._Name;
  }
}
