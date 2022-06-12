import React, { useRef } from "react";
import "./css/Login.css";

const Login = () => {
  const user_id = useRef(null);
  const password = useRef(null);

  return (
    <section className="login">
      <div className="login__card">
          <strong>SSM</strong><br/>
          <span>Secret Starbucks Menu</span>
        <form className="formm">
          <input type="text" placeholder="아이디를 입력하세요." />
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <input type="submit" value="로그인" />
        </form>
        <div class="actions">
          <a href="javascript:void(0)">아직 회원이 아니신가요? <u>회원가입 하기</u></a>
          {/* <a href="javascript:void(0)">아이디 찾기</a> */}
          {/* <a href="javascript:void(0)">비밀번호 찾기</a> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
