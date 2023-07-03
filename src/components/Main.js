import React, { useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.error("Ошибка при получении информации о пользователе:", error);
      });
  });

  React.useEffect(() => {
    api
      .getCards()
      .then((res) => {
        const cardsFromApi = res.map((card) => ({
          id: card._id,
          link: card.link,
          name: card.name,
          likes: card.likes.length,
          onCardClick: onCardClick,
        }));

        setCards(cardsFromApi);
      })
      .catch((error) => {
        console.error("Ошибка при получении карточек:", error);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <button onClick={onEditAvatar} className="profile__avatar-button" type="button">
            <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__info-wrapper">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-button" />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__button" />
      </section>
      <section className="gallery">
        {cards.map(({ id, ...props }) => (
          <Card onCardClick={props.onCardClick} key={id} {...props} />
        ))}
      </section>
    </main>
  );
}

export default Main;
