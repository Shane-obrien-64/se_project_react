// import logo from "./logo.svg";

import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <footer className="footer">
        <div className="footer__item">Developed Shane O'Brien</div>
        <div className="footer__item">2023</div>
      </footer>
    </div>
  );
}

export default App;
