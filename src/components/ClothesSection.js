import ItemCard from "./ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../blocks/ClothesSection.css";

const ClothesSection = ({ onSelectCard, clothingItems, handleLikeClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { _id } = currentUser;
  return (
    <div className="clothes-section">
      {clothingItems.map((item) => {
        const isOwn = item.owner === _id;
        const isLiked = item.likes.includes(currentUser._id);
        if (isOwn) {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              handleLikeClick={handleLikeClick}
              isLiked={isLiked}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ClothesSection;
