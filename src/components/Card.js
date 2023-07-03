function Card(props) {
  function handleClick() {
    console.log(props);
    props.onCardClick(props.name, props.link);
  }

  return (
    <div className="gallery__items">
      <img onClick={handleClick} src="#" alt="" className="gallery__image" src={props.link} />
      <button className="gallery__delete-button" />
      <div className="gallery__bottom">
        <h2 className="gallery__title">{props.name}</h2>
        <div className="gallery__like-container">
          <button type="button" className="gallery__like-button" />
          <span className="gallery__like-counter">{props.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
