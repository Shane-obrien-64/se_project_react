import headerLogo from "../images/Logo.svg";
import avatarImg from "../images/avatar.svg";
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
          <img src={headerLogo} alt="logo" />
        </div>
        <div>
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + add new clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatarImg} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
