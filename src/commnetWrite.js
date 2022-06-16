import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentDB, addCommentDB, modifyCommentDB, deleteCommentDB  } from "./redux/moduels/comment";
import {getPostListDB} from './redux/moduels/post'

import "./css/Detail.css";

const Comment = ({ postId }) => {
  const dispatch = useDispatch();

  


  const [commentEditMode, setCommentEditMode] = React.useState(false);
  const [content, setComment] = React.useState("");
  console.log(content)
  const data = useSelector((state) => state.comment.comments);
  const post = useSelector((state)=> state.post.posts);
  console.log(data)
  console.log(post)

  React.useEffect(() => {
    // setComment(data)
  }, [data]);

  React.useEffect(() => {
    dispatch(loadCommentDB(postId));
    dispatch(getPostListDB());

  }, []);

  const onCommentHandler = (e) => {
    setComment(e.currentTarget.value);
  };

 
  const addcomment = () => {
    dispatch(addCommentDB(
      
      content, postId));
  };


  const modifyComment = () => {
    setCommentEditMode(true);
    

  //   dispatch(modifyCommentDB(
  //   //   {
  //   //   title: title,
  //   //   imgUrl: attachment,
  //   //   content: recipe
  //   // }, param 
  //   )
  // );

  }

  const modifyCancel = () => {
    setCommentEditMode(false)
  }
  
  const deleteComment = (e) => {
    // console.log(e.target.value)
    const number = e.target.value
    const commentId = data[number]._id
    dispatch(deleteCommentDB(commentId));
  }

  return (
    <div>
          <div>
            <section>
              <div className="row">
                <div className="col-sm-5 col-md-6 col12 pb-4 wrapper">
                <h2>Comments</h2>
                {data && data.map((list, i) => {
                return (

                  <div key={i}>
                    {commentEditMode ?
                  <div className="text-justify darker mt-4 float-right" >
                    <h4>{data[i].nickname}</h4>
                    <p><input type="" defaultValue={data[i].content}></input></p>
                    <button onClick={modifyCancel}>취소</button>
                  </div>
                  :
                  <div className="text-justify darker mt-4 float-right" >
                    <h4>{data[i].nickname}</h4>
                    
                    <p>{data[i].content}</p>
                  </div>
                  }
                  <div className="commentButtons">
                    <button value= {i} onClick={deleteComment}>삭제</button>
                    <button value= {i} onClick={modifyComment}>수정</button>
                  </div>
                  </div>
                 )
                 })}
                </div>
              </div>
            </section>
          </div>
        
      
      <section className="data-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
            onChange={onCommentHandler}
          ></input>
          <button type="button" className="btn" onClick={addcomment}>
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Comment;
