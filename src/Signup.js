import React, {useRef} from 'react';
import "./index.css";


const Signup = () => {
  const name = useRef(null);
  const user_id = useRef(null);
  const password = useRef(null);
  const password_check = useRef(null);


  return (
    <div className='container'>
      <h1>회원가입</h1>
      <div 
      style={{
        marginTop: '2em'
        }}>

        {/* 닉네임 */}
      <div
        style={{
          display:'flex',
          marginTop:'1.5em'
        }}>
        <div className='name'
        style={{
          textAlign:'left'
        }}>
          <div style={{fontSize:'0.8em'}}>닉네임</div>
          <input type="text" ref={name} placeholder="한글 / 영문 / 숫자로만 입력해주세요."
          style={{
            float:'left',
            width:'300px',
            height:'50px',
            border:'1px solid transparent',
            borderBottom:'1px solid #ccc',
            backgroundColor:'transparent',
            outline:'none',
            boxSizing:'border-box'
            }}/>
        </div>
        <div className='btn'
        style={{
          marginLeft:'auto',
          background:'gray'
        }}>중복 검사</div>
      </div>
      

      {/* 아이디 */}
      <div
        style={{
          display:'flex',
          marginTop:'1.5em'
        }}>
        <div className='user_id'
        style={{
          textAlign:'left'
          }}>
          <div style={{fontSize:'0.7em'}}>아이디</div>
          <input type="text" ref={user_id} placeholder="예)ssm@aaa.com"
          style={{
            float:'left',
            width:'300px',
            height:'50px',
            border:'1px solid transparent',
            borderBottom:'1px solid #ccc',
            backgroundColor:'transparent',
            outline:'none',
            boxSizing:'border-box'
            }}/>
        </div>
        <div className='btn'
        style={{
          marginLeft:'2em',
          background:'gray'
        }}>중복 검사</div>
      </div>

      {/* 비밀번호 */}
      <div
        style={{
          display:'flex',
          alignItems:'center',
          marginTop:'1.5em'
        }}>
        <div className='password'
        style={{
          textAlign:'left'
        }}>
          <div style={{fontSize:'0.7em'}}>비밀번호</div>
          <input type="text" ref={password} placeholder="8자 이상 입력해주세요."
          style={{
            float:'left',
            width:'400px',
            height:'50px',
            border:'1px solid transparent',
            borderBottom:'1px solid #ccc',
            backgroundColor:'transparent',
            outline:'none',
            boxSizing:'border-box'
            }}/>
        </div>
        
      </div>

      {/* 비밀번호 확인 */}
      <div
        style={{
          display:'flex',
          alignItems:'center',
          marginTop:'1.5em'
        }}>
      <div className='password_check'
        style={{
          textAlign:'left'
        }}>
        <div style={{fontSize:'0.7em'}}>비밀번호 확인</div>
        <input type="text" ref={password_check}
          style={{
            float:'left',
            width:'400px',
            height:'50px',
            border:'1px solid transparent',
            borderBottom:'1px solid #ccc',
            backgroundColor:'transparent',
            outline:'none',
            boxSizing:'border-box'
            }}/>
      </div>
      
      </div>

      <div className='btn'
      style={{
        marginTop:'3em',
        padding: '0.9rem 3rem',
        height: '3rem'
      }}>가입하기</div>

      </div>

    </div>
  )
}

export default Signup;