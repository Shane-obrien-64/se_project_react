// import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import ProtectedRoute from "./ProtectedRoute";
import api from "../utils/api";
import { getForcastWeather } from "../utils/weatherApi";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import auth from "../utils/auth";
import "../blocks/App.css";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [location, setLocation] = useState("Current Location");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  const handleAddItem = (values) => {
    console.log(values);
    api
      .addItem(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        console.log(data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignUp = (values) => {
    auth
      .register(values)
      .then((res) => {
        console.log(res);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((res) => {
        console.log(res);
        console.log(auth.checkToken(res));
        setLogin(true);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteCard = (item) => {
    api
      .deleteItem(item.id)
      .then(() => {
        const newClothingList = clothingItems.filter((card) => {
          return card.id !== item.id;
        });
        setClothingItems(newClothingList);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const goToLogin = () => {
    setActiveModal("login");
  };

  useEffect(() => {
    api
      .getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const location = data.name;
        const temperature = {
          temperature: {
            F: Math.round(data.main.temp),
            C: Math.round(((data.main.temp - 32) * 5) / 9),
          },
        };
        setLocation(location);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      auth.checkToken(token).then((res) => {
        setLogin(res);
      });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        {/* <Header onCreateModal={handleCreateModal} location={location} /> */}
        {/* <Header onCreateModal={handleSignUpModal} location={location} /> */}
        <Header onCreateModal={handleLoginModal} location={location} />
        <Switch>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              loggedIn={loggedIn}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleAddItem={handleAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            deleteCard={deleteCard}
          />
        )}
        {activeModal === "signup" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "signup"}
            handleSignUp={handleSignUp}
            goToLogin={goToLogin}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login"}
            handleLogin={handleLogin}
            // goToLogin={goToLogin}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
