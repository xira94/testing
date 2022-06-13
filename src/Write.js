import React, { useState } from "react";
import "./css/Write.css";
import { Link } from "react-router-dom";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Write = () => {
  const [imgUrl, setImgUrl] = useState("");

  // 이미지 미리보기 함수
  const preview = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container_write">
      {/* style={{marginTop:'10em'}}> */}
      {/* <h1 style={{}}>게시글 작성</h1> */}

      {/* 이미지 업로드 버튼 */}
      <div className="wrap">
      <label>
        
        <div style=
        {imgUrl ? {
        display:'none'
        }
        :
        {
          display:'flex',
          alignItems:'center',
          float:'right'
        }}>
        <AddPhotoAlternateIcon style={{ cursor: "pointer", color:'#222'}} />
        <span style={{color:'#222', marginLeft:'0.5em',cursor: "pointer"}}>사진올리기</span>
        <input
          type="file"
          id="input-file"
          onChange={preview}
          style={{ display: "none" }}
        ></input>
        </div>

        {/* 이미지 미리보기 */}
        {imgUrl ? 
        <div>
          <img src ={imgUrl}
            style={{
              width: "400px",
              height: "400px",
              border: "1px solid #ccc",
            }} alt=""/>
          </div>
         : 
          <div
            style={{
              width: "400px",
              height: "400px",
              border: "1px solid black",
              display: 'none',
              // margin: "auto",
            }}
          ></div>
        }
      </label>

      {/* 음료 이름 */}
      <input
        type="text"
        placeholder="나만의 음료 이름을 적어주세요"
        className="input_3"
      ></input>
      <textarea
        className="textarea"
        placeholder="나만의 레시피를 남겨주세요"
      ></textarea>

      {/* 작성 완료 */}
      <div>
        <Link to="/">
          <button className="write_btn1" value="작성 완료">
            작성 완료
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Write;
