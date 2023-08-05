import "../blocks/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div className="card__title">{item.name}</div>
      <img
        className="card__image"
        src={item.link}
        alt={item.name}
        onClick={() => {
          onSelectCard(item);
        }}
      />
    </div>
  );
};

export default ItemCard;