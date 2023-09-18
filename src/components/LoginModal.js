import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/LoginModal.css";

const LoginModal = ({ handleCloseModal, handleLogin }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    handleLogin(email, password);
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
      <button className="modal__submit-btn" type="submit">
        Next
      </button>
      <button
        className="modal__register-btn"
        onClick={() => console.log("click")}
        type="button"
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
