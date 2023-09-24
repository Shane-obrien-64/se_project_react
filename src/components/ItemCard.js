import { useState } from "react";
import "../blocks/ItemCard.css";

const ItemCard = ({
  item,
  onSelectCard,
  handleLikeClick,
  isLiked,
  loggedIn,
}) => {
  const { _id } = item;
  const onCardLike = () => {
    handleLikeClick({ _id, isLiked });
  };

  const likeBtnClassName = `card__like-btn ${
    isLiked ? "like-btn_liked" : "like-btn_default"
  }`;

  // console.log(likeBtnClassName);

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__title">{item.name}</div>
        {loggedIn && (
          <button
            type="button"
            onClick={onCardLike}
            className={likeBtnClassName}
          />
        )}
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => {
          onSelectCard(item);
        }}
      />
    </div>
  );
};

export default ItemCard;
