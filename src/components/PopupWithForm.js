import React from "react";

function PopupWithForm({ isOpen, title, name, children, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form_type_${name}`} name="form" noValidate="">
          {children}
          <button type="submit" className={`popup__button form__submit_type_${name}`}>
            Сохранить
          </button>
        </form>
        <button type="button" className="popup__close-btn" onClick={handleClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
