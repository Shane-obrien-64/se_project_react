import ModalWithForm from "./ModalWithForm";
import React, { useState } from "react";

const EditProfileModal = ({ handleCloseModal, HandleEditProfile }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleEditProfile({ name, avatar });
  };
  return (
    <ModalWithForm
      name={"Edit-profile"}
      title={"Edit Profile"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
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
      <button className="modal__submit-btn" type="submit">
        Next
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
