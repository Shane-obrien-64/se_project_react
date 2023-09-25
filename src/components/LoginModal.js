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

  const registerBtn = {
    text: "or Register",
    handler: handleSignUpModal,
    className: "modal__register-btn",
  };

  return (
    <ModalWithForm
      name={"Login"}
      title={"Login"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Next"}
      additionalBtn={registerBtn}
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
    </ModalWithForm>
  );
};

export default LoginModal;
