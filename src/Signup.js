import React, { useRef } from "react";
import "./css/Signup.css";

const Signup = () => {
  const name = useRef(null);
  const user_id = useRef(null);
  const password = useRef(null);
  const password_check = useRef(null);

  return (
    <section class="signin">
      <div class="signin__card">
        <h2>
          <strong>SSM</strong> 이게 뭐의 약자였더라?
        </h2>
        <form className="formm">
          <div className="pack">
            <input type="text" placeholder="아이디를 입력하세요." />
            <button>중복확인</button>
          </div>
          <div className="pack">
            <input type="text" placeholder="닉네임." />
            <button>중복확인</button>
          </div>
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <input type="password" placeholder="비밀번호를 확인합니다." />
          <input type="submit" value="회원가입하기" />
        </form>
        <div class="actions">
          <a href="javascript:void(0)">로그인 페이지</a>
          {/* <a href="javascript:void(0)">아이디 찾기</a> */}
          {/* <a href="javascript:void(0)">비밀번호 찾기</a> */}
        </div>
      </div>
    </section>
  );
};

export default Signup;
