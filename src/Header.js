import React from 'react';
import "./index.css";

import {Link} from 'react-router-dom';


const Header = () => {

  return (
    <header>
      <div className="header__container"
      style={{
        alignItems:'center'
      }}>

        {/* 로고 */}
        <Link to = '/'>
        <div className="title">SSM</div>
        </Link>
        
        {/* 우상단 메뉴 */}
        <div className="menu"
        style={{
          display:"flex",
          marginLeft:'auto',
          fontSize:'0.8em'
        }}>
          {/* signup */}
          <Link to ='/signup'>
          <div className='signup'>Signup</div>
          </Link>

          {/* login */}
          <Link to ='/login'>
          <div className='login'
          style={{
            marginLeft:'1.5em'
          }}>Login</div>
          </Link>
        </div>
        
      </div>
    </header>
  )
}

export default Header;