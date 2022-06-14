import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { signupDB, idCheckFB, nicknameCheckFB } from "./redux/moduels/user";
import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import { registerUser } from './redux/moduels/user';

import "./css/Signup.css";

const Signup = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");

  const emailCheck = (email) => {
    let reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    return reg.test(email);
  };
  //비밀번호 영문/숫자 포함(8_20자)
  const passwordCheck = (password) => {
    let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    return _reg2.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!userId || !nickname || !password || !password2) {
      return window.alert("내용을 입력하세요");
    }
    if (!emailCheck(userId)) {
      window.alert("이메일을 형식에 맞게 입력해주세요.");
      return;
    }
    if (!passwordCheck(password)) {
      window.alert("비밀번호를 형식에 맞게 입력해주세요");
    }
    if (password !== password2) {
      return window.alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    dispatch(signupDB(userId, nickname, password));
  };

  const idCheck = () => {
    dispatch(idCheckFB(userId));
  };

  const nicknameCheck = () => {
    dispatch(nicknameCheckFB(nickname));
  };

  return (
    <section className="signin">
      <div className="signin__card">
        <strong>SSM</strong>
        <br />
        <span>Secret Starbucks Menu</span>
        <form className="formm">
          <div className="pack">
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              required
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <button onClick={idCheck}>중복확인</button>
            {/* 
          <strong>SSM</strong><br/>
          <span>Secret Starbucks Menu</span>
        <form className="formm">
          <div className="pack">
            <input type="text" placeholder="아이디를 입력하세요."/>
            <button>중복확인</button> */}
          </div>
          <div className="pack">
            <input
              type="text"
              placeholder="닉네임을 입력하세요."
              required
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <button onClick={nicknameCheck}>중복확인</button>
          </div>

          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호를 확인합니다."
            required
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          {/* <input type="submit" value="회원가입하기" /> */}
          <button className="signinin" onClick={handleSignUp}>
            회원가입하기
          </button>
        </form>
        <div className="actions">
          <a href="javascript:void(0)">
            <u>로그인 페이지</u>
          </a>

          {/* <input type="password" placeholder="비밀번호를 입력하세요."/>
          <input type="password" placeholder="비밀번호를 확인합니다."/>
          <input type="submit" value="회원가입하기"/>
        </form>
        <div className="actions">
          <u>로그인 페이지</u> */}

          {/* <a href="javascript:void(0)">아이디 찾기</a> */}
          {/* <a href="javascript:void(0)">비밀번호 찾기</a> */}
        </div>
      </div>
    </section>
  );
};

export default Signup;
