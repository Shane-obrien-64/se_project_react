import avatarImg from "../images/avatar.svg";
import "../blocks/SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <img className="side-bar__img" src={avatarImg} alt="avatar" />
      <h2 className="side-bar__title">Terrence Tegegne</h2>
    </div>
  );
};

export default SideBar;
