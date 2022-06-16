import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentFB, addCommentFB, modifyCommentDB  } from "./redux/moduels/comment";
import {getPostListDB} from './redux/moduels/post'

import "./css/Detail.css";

const Comment = ({ postId }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCommentFB(postId));
  }, [dispatch]);
  React.useEffect(() => {

    dispatch(getPostListDB());

  }, []);

  const [content, setComment] = React.useState("");
  console.log(content)
  const data = useSelector((state) => state.comment.comments);
  const post = useSelector((state)=> state.post.posts);
  console.log(data)
  console.log(post)

  const onCommentHandler = (e) => {
    setComment(e.currentTarget.value);
  };

 
  const addcomment = () => {
    dispatch(addCommentFB({
      content:content
    },postId));
  };


  const modifyComment = () => {
    dispatch(modifyCommentDB(
    //   {
    //   title: title,
    //   imgUrl: attachment,
    //   content: recipe
    // }, param 
  ));

  }

  const deleteComment = () => {

  }

  return (
    <div>
          <div>
            <section>
              <div className="row">
                <div className="col-sm-5 col-md-6 col12 pb-4">
                <h2>Comments</h2>
                {data && data.map((list, i) => {
                return (
                  <div key={i}>
                  <div className="text-justify darker mt-4 float-right" >
                    <h4>{data[i].nickname}</h4>
                    <p>{data[i].content}</p>
                  </div>
                  <div className="buttons">
                    <button onChange={modifyComment}>수정</button>
                    <button onChange={deleteComment}>삭제</button>
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
