import ModalWithForm from "./ModalWithForm";
import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfileModal = ({ handleCloseModal, handleEditProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser.avatar);
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({ name, avatar });
  };
  return (
    <ModalWithForm
      name={"Edit-profile"}
      title={"Edit Profile"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Next"}
    >
      <span>Name</span>
      <input
        className="modal__input"
        type="name"
        name="name"
        placeholder="Name"
        onChange={handleNameChange}
        value={name}
      />
      <span>Avatar URL</span>
      <input
        className="modal__input"
        type="url"
        name="avatar"
        placeholder="Avatar URL"
        onChange={handleAvatarChange}
        value={avatar}
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
