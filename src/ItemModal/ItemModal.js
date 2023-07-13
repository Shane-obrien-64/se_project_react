import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div>
      <div className={"modal"}>
        <div className="modal__item-card">
          <button
            className="modal__item-close"
            type="button"
            onClick={onClose}
          />
          <img
            className="modal__img"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <div className="modal__item-name">{selectedCard.name}</div>
          <div className="modal__item-type">
            Weather: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
