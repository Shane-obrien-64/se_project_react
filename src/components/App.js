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
import { useHistory } from "react-router-dom";
import auth from "../utils/auth";
import "../blocks/App.css";
import EditProfileModal from "./EditProfileModal";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [location, setLocation] = useState("Current Location");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

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

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  const handleAddItem = (values) => {
    api
      .addItem(values)
      .then((data) => {
        console.log(data.data);
        setClothingItems([...clothingItems, data.data]);
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
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const HandleEditProfile = (data) => {
    const { name, avatar } = data;
    api
      .editUser({ name, avatar })
      .then((res) => {
        setCurrentUser(res);
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
        setLogin(true);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteCard = (item) => {
    api
      .deleteItem(item._id)
      .then(() => {
        const newClothingList = clothingItems.filter((card) => {
          return card._id !== item._id;
        });
        setClothingItems(newClothingList);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLikeClick = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    isLiked
      ? api
          .dislikeItem(_id, token)
          .then((updatedCard) => {
            const updatedItems = clothingItems.map((c) =>
              c._id === _id ? updatedCard.item : c
            );
            setClothingItems(updatedItems);
          })
          .catch((err) => console.log(err))
      : api
          .likeItem(_id, token)
          .then((updatedCard) => {
            const updatedItems = clothingItems.map((c) =>
              c._id === _id ? updatedCard.item : c
            );
            setClothingItems(updatedItems);
          })
          .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    handleCloseModal();
    setLogin(false);
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
        setCurrentUser(res);
        setLogin(true);
      });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          location={location}
          loggedIn={loggedIn}
          handleLoginModal={handleLoginModal}
          handleSignUpModal={handleSignUpModal}
        />

        {/* <Header onCreateModal={handleSignUpModal} location={location} /> */}
        {/* <Header onCreateModal={handleLoginModal} location={location} /> */}
        <Switch>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              handleEditModal={handleEditModal}
              handleSignOut={handleSignOut}
              handleLikeClick={handleLikeClick}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              loggedIn={loggedIn}
              handleLikeClick={handleLikeClick}
              currentUser={currentUser}
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
            handleLoginModal={handleLoginModal}
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
        {activeModal === "edit" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            HandleEditProfile={HandleEditProfile}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
