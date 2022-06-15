import React from "react";
import "./css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostDB, getPostListDB } from "./redux/moduels/post";

const Detail = (props) => {
  // const localStoragetokenCheck = localStorage.getItem("token");
  // console.log(localStoragetokenCheck)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post_data = useSelector((state)=> state.post.posts)
  const is_login = useSelector((state) => state.user.is_login);
  const login_token = useSelector((state)=>state.user.user)
  console.log(login_token)
  console.log(post_data)

 
  // React.useEffect(() => {

  //   dispatch(getPostListDB());

  // }, []);
  
  
  const param = useParams().id;
  const data = useSelector(state => state.post.posts)
  
  const nowPost = data && data.filter((v,i)=>
    String(param) === v._id
  )
  // console.log(nowPost[0]._id)


  const onDeleteHandler = () => {

    dispatch(deletePostDB(param))
    
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
        <p>
        {nowPost && nowPost[0].content}
        </p>
      </div>
      <hr/>

      {/* 댓글 */}
      <section>
        {/* <div class="container"> */}
        <div className="row">
          <div className="col-sm-5 col-md-6 col12 pb-4">
            <h2>Comments</h2>
            <div className="text-justify darker mt-4 float-right">
              <h4>Jhon Doe</h4>
              {/* <span>- 20 October, 2018</span> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus numquam assumenda hic aliquam vero sequi velit
              </p>
            </div>
            <div className="text-justify darker mt-4 float-right">
              <h4>Rob Simpson</h4>
              {/* <span>- 20 October, 2018</span> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus numquam assumenda hic aliquam vero sequi velit
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="data-search">
        <div className="input-group">
          
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
          ></input>

          <button type="button" className="btn">
            Submit
          </button>
        </div>
      </section>

      {/* ----------댓글 여기까기------------- */}
      {is_login ? 
      <div className="buttons">
        <Link to={`/write/${nowPost && nowPost[0]._id}`}>
          <button type="button" className="btn">
            수정
          </button>
        </Link>
        <button
          type="button"
          className="btn"
          onClick={onDeleteHandler}
        >
          삭제
        </button>
      </div>
      :
      ''
      }
    </div>
  );
};

export default Detail;
