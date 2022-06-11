import React, {useState} from 'react';
import "./index.css";
import {Link} from 'react-router-dom'

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const Write = () => {

  const [imgUrl, setImgUrl] = useState('');

  // 이미지 미리보기 함수
  const preview = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  
  return (
    <div className='container'>
    {/* style={{marginTop:'10em'}}> */}
      {/* <h1 style={{}}>게시글 작성</h1> */}

      {/* 이미지 업로드 버튼 */}
      <label
      style={{}}>
        <AddPhotoAlternateIcon
        style={{cursor:'pointer', float:'right'}}/>
        <input type='file' id='input-file'
        onChange={preview}
          style={{display:'none'}}>
        </input>

        {/* 이미지 미리보기 */}
        {imgUrl ? 
        <div
        style={{
          width: '400px',
          height: '400px',
          border:'1px solid #ccc',
          backgroundImage:`url(${imgUrl})`
        }}>
        </div>
          :
        ''
        }
               
      
      </label>

      {/* 음료 이름 */}
      <input type='text' placeholder='나만의 음료 이름을 적어주세요'
      style={{
        width:'400px',
        height:'50px',
        marginTop:'2em',
        background:'transparent',
        color:'#021d49',
        border: '1px solid transparent',
        borderBottom:'1px solid #021d49',
        boxSizing:'border-box',
        textAlign:'center',
        outline:'none'
      }}
      ></input>
      <textarea placeholder='나만의 레시피를 남겨주세요'
      style={{
        padding:'20px',
        width:'400px',
        height:'300px',
        resize: 'none',
        marginTop:'2em',
        border: '1px solid transparent',
        borderRadius:'5px',
        boxSizing:'border-box',
        outline:'none'
      }}
      ></textarea>

      {/* 작성 완료 */}
      <div
      style={{
        width:'400px'
      }}>
      <Link to ='/'>
      <div className='btn' value="작성 완료"
      style={{
        float:'right',
        marginTop:'1em',
        marginRight:'0.5em'
      }}>
        작성 완료
      </div>
      </Link>
      </div>
      

      





      

      
    </div>
  )
}

export default Write;