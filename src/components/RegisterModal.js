import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/RegisterModal.css";

const RegisterModal = ({
  handleCloseModal,
  handleSignUp,
  handleLoginModal,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  const loginBtn = {
    text: "or Log in",
    handler: handleLoginModal,
    className: "modal__login-btn",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      name={"Register"}
      title={"Sign up"}
      buttonText={"Next"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      additionalBtn={loginBtn}
    >
      <span>Email</span>
      <input
        className="modal__input"
        type="text"
        name="email"
        minLength="1"
        maxLength="30"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
      />
      <span>Password</span>
      <input
        className="modal__input"
        type="password"
        name="password"
        minLength="8"
        maxLength="30"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
      />
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

export default RegisterModal;
