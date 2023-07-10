import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");
  return (
    <div>
      <div className={"modal"}>
        <div className="modal__container">
          <button type="button" onClick={onClose} />
          <img src={selectedCard.link} alt={selectedCard.name} />
          <div>{selectedCard.name}</div>
          <div>{selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
