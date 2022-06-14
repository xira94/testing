import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginDB } from "./redux/moduels/user";
import "./css/Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = () => {
    if (email === "" || password === "") {
      window.alert("이메일,비밀번호 모두 입력해주세요.");
    }
    if (!emailCheck) {
      window.alert("이메일 형식에 맞게 작성해주세요요");
    }
    if (!passwordCheck(password)) {
      window.alert("비밀번호를 형식에 맞게 입력해주세요");
    }
    dispatch(loginDB(email, password));
  };

  return (
    <section className="login">
      <div className="login__card">
        <strong>SSM</strong>
        <br />
        <span>Secret Starbucks Menu</span>
        <form className="formm">
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력하세요."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            id="pw"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <input type="submit" value="로그인" /> */}
          <button onClick={handleLogin}>로그인</button>
        </form>
        <div className="actions">
          <a href="javascript:void(0)">
            아직 회원이 아니신가요? <u>회원가입 하기</u>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
