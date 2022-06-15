import React from "react";
import "./css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { logoutDB } from "./redux/moduels/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const is_login = useSelector((state) => state.user.is_login);

  const logout = () => {
    dispatch(logoutDB());
    navigate('/')
  };

  const tologin = () => {
    navigate("/Login");
  };

  const toSignup = () => {
    navigate("/Signup");
  };
  return (
    <header>
      <div className="header__container">
        <Link to="/">
          <div className="logo">
            <strong>SSM</strong>
          </div>
        </Link>
        <div className="menu">
          {is_login ? (
            <button type="button" className="btn_1" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <button type="button" className="btn_1" onClick={toSignup}>
                Signup
              </button>

              <button type="button" className="btn_1" onClick={tologin}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// {
//   /* <Link to="/signup">
//             <button type="button" class="btn_1">
//           <div className="logo"><strong>SSM</strong></div>
//         </Link>
//         <div className="menu">
//           <Link to="/signup">
//             <button type="button" className="btn_1">

//               Signup
//             </button>
//           </Link>
//           <Link to="/login">
//             <button type="button" className="btn_1">
//               Login
//             </button>
//           </Link> */
// }
