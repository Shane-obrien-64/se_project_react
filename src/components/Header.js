import headerLogo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ToggleSwitch from "./ToggleSwitch";
import "../blocks/Header.css";

const Header = ({
  onCreateModal,
  location,
  loggedIn,
  handleLoginModal,
  handleSignUpModal,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, avatar } = currentUser;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={headerLogo} alt="logo" />
          </Link>
        </div>
        <div>
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {loggedIn ? (
          <div className="header__loggedin">
            <button
              className="header__button"
              type="text"
              onClick={onCreateModal}
            >
              + add new clothes
            </button>
            <Link to="/profile" className="header__profile">
              {name}
            </Link>
            <Link to="profile" className="header__avatar">
              <img className="header__avatar" src={avatar} alt="avatar" />
            </Link>
          </div>
        ) : (
          <div className="header__avatar-logo">
            <button className="header__button" onClick={handleSignUpModal}>
              Sign up
            </button>
            <button className="header__button" onClick={handleLoginModal}>
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
