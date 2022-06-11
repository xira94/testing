import React, {useRef} from 'react';
import "./index.css";


const Login = () => {

  const user_id = useRef(null);
  const password = useRef(null);


  return (
    <div className='container'>
      <h1>로그인</h1>
      <div 
      style={{
        marginTop: '2em'
        }}>

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
          <div style={{fontSize:'0.7em'}} >아이디</div>
          <input type="text" ref={user_id} placeholder="예) ssm@aaa.com"
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
          <input type="text" ref={password} 
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
        
      </div>
      <div className='btn'
      style={{
        marginTop:'3em',
        padding: '0.9rem 3rem',
        height: '3rem'
      }}>로그인하기</div>

      </div>

    </div>
  )
}

export default Login;