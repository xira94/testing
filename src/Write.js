import React, { useState } from "react";
import "./css/Write.css";
import { Link, useNavigate } from "react-router-dom";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {useDispatch} from 'react-redux'
import { addPostDB } from "./redux/module/post";



const Write = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState('');
  const [recipe, setRecipe] = useState('');

  // 이미지 미리보기 함수
  const preview = async(e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));

    
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();


  

  // handler 함수들
  const onTitleHandler = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onRecipeHandler = (e) => {
    setRecipe(e.currentTarget.value);
  };

  const onSubmitHandler = async(e) => {
  // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
  e.preventDefault();

    dispatch(addPostDB(
       {
        'imgUrl':imgUrl,
        'title':title,
        'recipe': recipe
      }
    ))
     
    navigate(`/`)
  
};


  return (
    <div className="container_write">

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
        <form style={{ display: "none" }}>
          <label htmlFor="file">
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          onChange={preview}
          style={{ display: "none" }}
        ></input>
        </label>
        </form>
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
        onChange={onTitleHandler}
      ></input>
      <textarea
        className="textarea"
        placeholder="나만의 레시피를 남겨주세요"
        onChange={onRecipeHandler}
      ></textarea>

      {/* 작성 완료 */}
      <div>
        <Link to="/">
          <button className="write_btn1" value="작성 완료" onClick={onSubmitHandler}>
            작성 완료
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Write;
