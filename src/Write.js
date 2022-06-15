import React, { useState, useRef } from "react";
import "./css/Write.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDispatch, useSelector } from 'react-redux'
import { addPostDB, modifyPostDB } from "./redux/moduels/post"
import axios from 'axios';



const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInput = useRef(null);

  const postList = useSelector(state => state.post.posts)
  const param = useParams().id;
  const is_edit = param ? true : false;
  const edit_post = is_edit ? postList.find(p=> String(p.id) === param) : null;
  const [title, setTitle] = useState(edit_post ? edit_post.title : '');
  const [recipe, setRecipe] = useState(edit_post ? edit_post.recipe : '');
  const [imgUrl, setImgUrl] = useState(edit_post ? edit_post.img_file: "");
  // console.log(edit_post)

  // 수정 중 새로고침하면 데이터가 날아가므로 새로고침하면 강제 홈으로 이동
  React.useEffect(()=> {
    if(is_edit && !edit_post){
      navigate(`/`)
    }
  })
  
  // // 이미지 미리보기 함수
  // const preview = async(e) => {
  //   setImgUrl(URL.createObjectURL(e.target.files[0]));
  // };

  // // 이미지 저장 함수
  // const saveImage = (e) => {
  //   console.log(e.target.files[0])
  //   // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
  //   e.preventDefault();
  //   const fileReader = new FileReader();
    
  //   if(e.target.files[0]){
  //     fileReader.readAsDataURL(e.target.files[0])
  //   }
  //   fileReader.onload = () => {
  //     setImgUrl({
  //       img_file: e.target.files[0],
  //       preview_URL: fileReader.result
  //     })
  //   }
  // }
  const saveImage = (e) => {
    const reader = new FileReader();
    const theFile = fileInput.current.files[0];
    console.log(theFile);
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
        const {
            currentTarget: { result },
        } = finishiedEvent;
        // setAttachment(result);
    };
};

  const onSubmitHandler = () => {
    if (recipe === "" || imgUrl === "" || title === "") {
        window.alert('내용을 입력해주세요!')
    }

    const file = imgUrl.current.files[0];
    console.log(file);

    const formData = new FormData();

    formData.append("imageTest", file);
    formData.append("title", title);
    formData.append("content", recipe);
    console.log("formData", formData);

    dispatch(addPostDB(formData));
};
 

  // handler 함수들
  // 적힌 음료 이름 가져오기
  const onTitleHandler = (e) => {
    setTitle(e.currentTarget.value);
  };
  // 적힌 레시피 내용 가져오기
  const onRecipeHandler = (e) => {
    setRecipe(e.currentTarget.value);
  };
  // 적힌 내용 저장하고 메인으로 이동
//   const onSubmitHandler = async() => {
//     console.log('추가')
//     if(imgUrl.img_file){
//       const formData = new FormData()
//       formData.append('imageTest', imgUrl.img_file);
//       // for (var pair of formData.entries()) { console.log(pair[0]+ ', ' + pair[1]); }
//       await axios.post('/api/posts/postslist', formData,{
//         headers:{
//           'content-type': 'multipart/form-data'
//         }
//       });
//       alert("서버에 등록이 완료되었습니다!");
//       setImgUrl({
//         img_file: imgUrl.img_file,
//         preview_URL: imgUrl.img_file
//       })
//     }
//     // let date = new Date().toString().slice(0,21).split(' ').join('')
//     dispatch(addPostDB(
//       {
//       //  postId: title+date,
//       //  editor: ,
//        imgUrl: imgUrl.img_file ? imgUrl.img_file : '',
//       //  preview_URL: imgUrl.preview_URL,
//        title: title ? title: '',
//        content: recipe ? recipe : ''
//      }
//    ))

//     navigate(`/`)
  
// };

// id: param,
const onModifyHandler = async() => {
  
  if(imgUrl.img_file){
    const formData = new FormData()
    formData.append('imageTest', imgUrl.img_file);
    // for (var pair of formData.entries()) { console.log(pair[0]+ ', ' + pair[1]); }
    await axios.post('/api/posts', formData,{
      headers:{
        'content-type': 'multipart/form-data'
      }
    });
    alert("서버에 등록이 완료되었습니다!");
    setImgUrl({
      img_file: imgUrl.img_file,
      preview_URL: imgUrl.img_file
    })
  }

  dispatch(modifyPostDB(
    { 
      imgUrl: imgUrl.img_file ? imgUrl.img_file : '',
      preview_URL: imgUrl.preview_URL,
      title: title,
      content: recipe
    },
    param
  ))
}
 

  return (
    <div className="container_write">

      {/* 이미지 업로드 버튼 */}
      <div className="wrap">
      <label>
        
        <div style=
        {imgUrl.imgUrl ? {
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
          ref={fileInput}
          type="file"
          id="file-input"
          name="file"
          accept="image/*"
          onChange={saveImage}
          style={{ display: "none" }}
          multiple="multiple"
        ></input>
        </label>
        </form>
        </div>

        {/* 이미지 미리보기 */}
        {imgUrl.img_file ? 
        <div>
          <img src ={imgUrl.preview_URL}
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
        defaultValue={title}
        onChange={onTitleHandler}
      ></input>
      <textarea
        defaultValue={recipe}
        className="textarea"
        placeholder="나만의 레시피를 남겨주세요"
        onChange={onRecipeHandler}
      ></textarea>

      {/* 작성 완료 */}
      <div>
        {is_edit ?
        <Link to={`/write/detail/${param}`}>
          <button className="write_btn1" value="작성 완료" onClick={onModifyHandler}>
            수정 완료
          </button>
        </Link>
        :
        <Link to="/">
          <button className="write_btn1" value="작성 완료" onClick={onSubmitHandler}>
            작성 완료
          </button>
        </Link>
        }
      </div>
    </div>
    </div>
  );
};

export default Write;
