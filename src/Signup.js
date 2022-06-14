import React from 'react';
// import { useDispatch } from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import { registerUser } from './redux/moduels/user';
import "./css/Signup.css";


const Signup = () => {


  return (
    <section className="signin">
      <div className="signin__card">
          <strong>SSM</strong><br/>
          <span>Secret Starbucks Menu</span>
        <form className="formm">
          <div className="pack">
            <input type="text" placeholder="아이디를 입력하세요."/>
            <button>중복확인</button>
          </div>
          <div className="pack">
            <input type="text" placeholder="닉네임을 입력하세요." />
            <button>중복확인</button>
          </div>
          <input type="password" placeholder="비밀번호를 입력하세요."/>
          <input type="password" placeholder="비밀번호를 확인합니다."/>
          <input type="submit" value="회원가입하기"/>
        </form>
        <div className="actions">
          <u>로그인 페이지</u>
          {/* <a href="javascript:void(0)">아이디 찾기</a> */}
          {/* <a href="javascript:void(0)">비밀번호 찾기</a> */}
        </div>
      </div>
    </section>
  );
};

export default Signup;
