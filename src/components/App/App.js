// import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getForcastWeather } from "../utils/weatherApi";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("Current Location");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForcastWeather().then((data) => {
      const location = data.name;
      const temperature = Math.ceil(data.main.temp);
      setLocation(location);
      setTemp(temperature);
    });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} location={location} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          name={"add-garment"}
          title={"New garment"}
          onClose={handleCloseModal}
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
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
