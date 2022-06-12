import React, { useRef } from "react";
import "./css/Login.css";

const Login = () => {
  const user_id = useRef(null);
  const password = useRef(null);

  return (
    <section class="signin">
      <div class="signin__card">
        <h2>
          <strong>SSM</strong> 이게 뭐의 약자였더라?
        </h2>
        <form className="formm">
          <input type="text" placeholder="아이디를 입력하세요." />
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <input type="submit" value="로그인" />
        </form>
        <div class="actions">
          <a href="javascript:void(0)">회원가입</a>
          {/* <a href="javascript:void(0)">아이디 찾기</a> */}
          {/* <a href="javascript:void(0)">비밀번호 찾기</a> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
