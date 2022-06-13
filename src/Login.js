import React, { useRef } from "react";
import "./css/Login.css";

import { useDispatch } from 'react-redux';
// import { loadUserDB } from './redux/module/user'

const Login = () => {
  const user_id = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  // React.useEffect(()=> {
  //   dispatch(loadUserDB());
  // }, [])
  

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
        <div className="actions">
          아직 회원이 아니신가요? <u>회원가입 하기</u>
          {/* <a href="javascript:void(0)">아이디 찾기</a> */}
          {/* <a href="javascript:void(0)">비밀번호 찾기</a> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
