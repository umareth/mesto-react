import React, { useState } from "react";
import logo from "../images/logo_mesto.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
  }
  // Обработчики событий
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
    console.log("check");
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard("");
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="edit-profile" onClose={closeAllPopups}>
          <div className="popup__input-wrapper">
            <input type="text" className="popup__input popup__input_value_name" id="name" name="name" placeholder="Имя" minLength={2} maxLength={40} required="" />
            <span className="popup__input-error speciality-input-error" />
            <input type="text" className="popup__input popup__input_value_speciality" id="speciality" name="speciality" placeholder="Ваша профессия" minLength={2} maxLength={200} required="" />
            <span className="popup__input-error speciality-input-error" />
          </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} title="Новое место" name="add-place" onClose={closeAllPopups}>
          <div className="popup__input-wrapper">
            <input type="text" className="popup__input popup__input_value_name" id="name" name="name" placeholder="Имя" minLength={2} maxLength={40} required="" />
            <span className="popup__input-error speciality-input-error" />
            <input type="text" className="popup__input popup__input_value_speciality" id="speciality" name="speciality" placeholder="Ваша профессия" minLength={2} maxLength={200} required="" />
            <span className="popup__input-error speciality-input-error" />
          </div>{" "}
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="update-avatar" onClose={closeAllPopups}>
          <div className="popup__input-wrapper">
            <input type="text" className="popup__input popup__input_value_name" id="name" name="name" placeholder="URL ссылка" minLength={2} maxLength={40} required="" />
            <span className="popup__input-error speciality-input-error" />
          </div>{" "}
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
