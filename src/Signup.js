import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import { registerUser } from './redux/moduels/user';
import "./css/Signup.css";


const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Name, setName] = useState('');
//   const [ConfirmPassword, setConfirmPassword] = useState('');

// // handler 함수들
// const onEmailHandler = (e) => {
//   setEmail(e.currentTarget.value);
// };

// const onNameHandler = (e) => {
//   setName(e.currentTarget.value);
// };

// const onPasswordHandler = (e) => {
//   setPassword(e.currentTarget.value);
// };

// const onConfirmPasswordHandler = (e) => {
//   setConfirmPassword(e.currentTarget.value);
// };

// const onSubmitHandler = (e) => {
//   // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
//   e.preventDefault();

//   if (Password !== ConfirmPassword) {
//     return alert('비밀번호 확인이 일치하지 않습니다.');
//   }

//   let body = {
//     email: Email,
//     name: Name,
//     password: Password,
//   };

//   // action을 dispatch해준다.
//   dispatch(registerUser(body)).then((response) => {
//     if (response.payload.success) {
//       navigate(`/`)
//     } else {
//       alert('회원가입에 실패했습니다.');
//     }
//   });
// };

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
