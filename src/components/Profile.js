import avatarImg from "../images/avatar.svg";
import ItemCard from "./ItemCard";
import { defaultClothingItems } from "../utils/consts";
import "../blocks/Profile.css";

function Profile({ onSelectCard }) {
  return (
    <div className="profile">
      <div className="profile__user-section">
        <img className="profile__img" src={avatarImg} alt="avatar" />
        <h2 className="profile__title">Terrence Tegegne</h2>
      </div>
      <div>
        <div className="profile__items">
          <p className="profile__section-title">Your Items</p>
          <button className="profile__add-btn">+ Add new</button>
        </div>
        <div className="profile__card-section">
          {defaultClothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
