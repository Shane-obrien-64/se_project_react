import avatarImg from "../images/avatar.svg";
import "../blocks/SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__group">
        <img className="side-bar__img" src={avatarImg} alt="avatar" />
        <h2 className="side-bar__title">Terrence Tegegne</h2>
      </div>
      <button className="side-bar__btn" type="button">
        Edit profile
      </button>
      <button className="side-bar__btn" type="button">
        Log out
      </button>
    </div>
  );
};

export default SideBar;
