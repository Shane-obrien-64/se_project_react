import ItemCard from "./ItemCard";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
// import { defaultClothingItems } from "../utils/consts";
import "../blocks/Profile.css";

function Profile({
  onCreateModal,
  onSelectCard,
  clothingItems,
  handleEditModal,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <SideBar
        handleEditModal={handleEditModal}
        handleSignOut={handleSignOut}
      />
      <div>
        <div className="profile__items">
          <p className="profile__section-title">Your Items</p>
          <button onClick={onCreateModal} className="profile__add-btn">
            + Add new
          </button>
        </div>
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
        />
      </div>
    </div>
  );
}

export default Profile;
