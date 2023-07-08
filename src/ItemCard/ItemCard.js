import "./ItemCard.css";

const ItemCard = ({ x }) => {
  return (
    <div className="card">
      <div className="card__title">{x.name}</div>
      <img className="card__image" src={x.link} alt={x.name} />
    </div>
  );
};

export default ItemCard;
