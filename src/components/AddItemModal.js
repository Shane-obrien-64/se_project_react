import React, { useState } from "react";
import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ handleCloseModal, handleAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setClimateType] = useState("");
  const handleClimateChange = (e) => {
    setClimateType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      name={"add-garment"}
      title={"New garment"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <span className="modal__input-label">Name</span>
      <input
        className="modal__input"
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
        onChange={handleNameChange}
        value={name}
      />
      <span className="modal__input-label">Image</span>
      <input
        className="modal__input"
        type="url"
        name="link"
        placeholder="Image URL"
        onChange={handleUrlChange}
        value={imageUrl}
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
            onChange={handleClimateChange}
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
            onChange={handleClimateChange}
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
            onChange={handleClimateChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
