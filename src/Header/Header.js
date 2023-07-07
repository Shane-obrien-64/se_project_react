import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <div>date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">add new clothes</button>
        </div>
        <div>User</div>
        <div>
          <img src="/images/avatar.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
