import headerLogo from "../images/Logo.svg";
import avatarImg from "../images/avatar.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import "../blocks/Header.css";

const Header = ({ onCreateModal, location }) => {
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
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + add new clothes
          </button>
        </div>
        <Link to="/profile" className="header__profile">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatarImg} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
