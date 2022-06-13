import React from "react";
import "./css/Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <Link to="/">
          <div className="logo"><strong>SSM</strong></div>
        </Link>
        <div className="menu">
          <Link to="/signup">
            <button type="button" className="btn_1">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn_1">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
