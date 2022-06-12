import React from "react";
import "./css/Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <Link to="/">
          <p>SSM</p>
        </Link>
        <div className="menu">
          <Link to="/signup">
            <button type="button" class="btn_1">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button type="button" class="btn_1">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
