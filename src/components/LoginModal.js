import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/LoginModal.css";

const LoginModal = ({ handleCloseModal, handleLogin, handleSignUpModal }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!email || !password) {
      return;
    }
    handleLogin(email, password);
    e.preventDefault();
  };

  return (
    <ModalWithForm
      name={"Login"}
      title={"Login"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <span>Email</span>
      <input
        className="modal__input"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
      />
      <span>Password</span>
      <input
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
      />
      <button className="modal__submit-btn" type="submit">
        Next
      </button>
      <button
        className="modal__register-btn"
        onClick={handleSignUpModal}
        type="button"
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
