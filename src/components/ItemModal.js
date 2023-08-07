import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose, deleteCard }) => {
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
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
          <div className="modal__card-info">
            <div>
              <div className="modal__item-name">{selectedCard.name}</div>
              <div className="modal__item-type">
                Weather: {selectedCard.weather}
              </div>
            </div>
            <button
              onClick={() => {
                deleteCard(selectedCard);
              }}
              className="modal__delete"
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
