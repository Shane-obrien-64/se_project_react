import React, { useState } from "react";
import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e);
    setName(e.target.value)
  }

  const [link, setUrl] 

  return (
    <ModalWithForm
      name={"add-garment"}
      title={"New garment"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onAddItem}
    >
      <span className="modal__input-label">Name</span>
      <input
        className="modal__input"
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
      />
      <span className="modal__input-label">Image</span>
      <input
        className="modal__input"
        type="url"
        name="link"
        placeholder="Image URL"
      />

      <div className="modal__weather-type">
        <span className="modal__label">Select weather type:</span>
        <div className="modal__radio-group">
          <input
            name="weather-type"
            className="modal__radio"
            type="radio"
            id="hot"
            value="hot"
          />
          <label>Hot</label>
        </div>
        <div className="modal__radio-group">
          <input
            name="weather-type"
            className="modal__radio"
            type="radio"
            id="warm"
            value="warm"
          />
          <label>Warm</label>
        </div>
        <div className="modal__radio-group">
          <input
            name="weather-type"
            className="modal__radio"
            type="radio"
            id="cold"
            value="cold"
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
