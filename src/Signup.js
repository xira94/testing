import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { signupDB, idCheckFB, nicknameCheckFB } from "./redux/moduels/user";

import "./css/Signup.css";

const Signup = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const emailCheck = (email) => {
    let reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    return reg.test(email);
  };
  //비밀번호 영문/숫자 포함(8_20자)
  const password2 = (password) => {
    let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    return _reg2.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!userId || !nickname || !password || !passwordCheck) {
      return window.alert("내용을 입력하세요");
    }
    if (!emailCheck(userId)) {
      window.alert("이메일을 형식에 맞게 입력해주세요.");
      return;
    }
    if (!password2(password)) {
      window.alert("비밀번호를 형식에 맞게 입력해주세요");
    }
    if (password !== passwordCheck) {
      return window.alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    dispatch(signupDB(userId, nickname, password));
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

            <button>중복확인</button>

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
            <button>중복확인</button>
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
              setPasswordCheck(e.target.value);
            }}
          />
          {/* <input type="submit" value="회원가입하기" /> */}
          <button className="signinin" onClick={handleSignUp}>
            회원가입하기
          </button>
        </form>
        <div className="actions">
          <a>
            <u>로그인 페이지</u>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signup;
