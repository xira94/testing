import React from "react";
import "./css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostDB, getPostListDB } from "./redux/moduels/post";
import Comment from "./commnetWrite";

const Detail = (props) => {
  // const localStoragetokenCheck = localStorage.getItem("token");
  // console.log(localStoragetokenCheck)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post_data = useSelector((state) => state.post.posts);
  const is_login = useSelector((state) => state.user.is_login);
  const login_token = useSelector((state) => state.user.user);

  console.log(login_token);
  console.log(post_data);

  React.useEffect(() => {
    dispatch(getPostListDB());
  }, []);

  // React.useEffect(() => {

  //   dispatch(getPostListDB());

  // }, []);

  const postId = useParams().id;
  const data = useSelector((state) => state.post.posts);
  console.log(data);
  const nowPost = data && data.filter((v, i) => String(postId) === v._id);
  // console.log(nowPost[0]._id)

  const onDeleteHandler = () => {
    dispatch(deletePostDB(postId));
  };

  return (
    <div className="Detail__container">
      <div className="img">
        <img
          src={`http://sparta-swan.shop/${nowPost && nowPost[0].imageUrl}`}
          alt="test"
        ></img>
      </div>
      <div className="faHeart">
        <FontAwesomeIcon size="lg" icon={faHeart} />
      </div>
      <h1>{nowPost && nowPost[0].title}</h1>
      <hr />
      <div className="container">
        <p>{nowPost && nowPost[0].content}</p>
      </div>

      <hr />
      <div className="last_btn">
        <Link to={`/write/${nowPost && nowPost[0]._id}`}>
        <button type="button" className="btn__1">
          수정
        </button>
        </Link>
        <button type="button" className="btn__1" onClick={onDeleteHandler}>
          삭제
        </button>
      </div>
      <hr />

      {/* 댓글 */}
      <Comment postId={postId} />
      {/* ----------댓글 여기까기------------- */}
      {/* {is_login ? ( */}
        {/* <div className="buttons">
          <Link to={`/write/${nowPost && nowPost[0]._id}`}>
            <button type="button" className="btn">
              수정
            </button>
          </Link>
          <button type="button" className="btn" onClick={onDeleteHandler}>
            삭제
          </button>
        </div> */}
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default Detail;
