import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

const ClothesSection = ({ onSelectCard, clothingItems }) => {
  return (
    <div className="clothes-section">
      {clothingItems.map((item) => {
        return (
          <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
        );
      })}
    </div>
  );
};

export default ClothesSection;
