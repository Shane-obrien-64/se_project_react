import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../blocks/SideBar.css";

const SideBar = ({ handleEditModal, handleSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, avatar } = currentUser;
  return (
    <div className="side-bar">
      <div className="side-bar__group">
        <img className="side-bar__img" src={avatar} alt="avatar" />
        <h2 className="side-bar__title">{name}</h2>
      </div>
      <button className="side-bar__btn" type="button" onClick={handleEditModal}>
        Edit profile
      </button>
      <button className="side-bar__btn" type="button" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
