import headerLogo from "../images/Logo.svg";
import avatarImg from "../images/avatar.svg";
import "./Header.css";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={headerLogo} alt="logo" />
        </div>
        <div>date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            add new clothes
          </button>
        </div>
        <div>User</div>
        <div>
          <img src={avatarImg} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
