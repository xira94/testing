import React from "react";
import "./css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {Link,useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostDB } from "./redux/moduels/post";

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams().id;
  

  return (
    <div className="Detail__container">
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1615679953957-340c5cb38bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcmJ1Y2tzJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="test"
        ></img>
      </div>
      <div className="faHeart">
        <FontAwesomeIcon size="lg" icon={faHeart} />
      </div>
      <h1>Drop Caps</h1>
      <hr />
      <div className="container">
        <p>
          Drop cap or dropped capital is a large capital letter used as a
          decorative element at the beginning of a paragraph or section. The
          size of a drop cap is usually two or more lines.
        </p>
        <p>
          The practice of using a large letter to mark the start of a text has
          been around for almost two thousand years. Illustrated caps increased
          usability by marking important passages and guiding readers through
          the text.
        </p>
      </div>
      <hr />
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
          <input type="text" className="form-control" placeholder="Comment"></input>
          <button type="button" className="btn">
            Submit
          </button>
        </div>
      </section>
      <div className="buttons">
        <Link to ={`/write/${param}`}>
        <button type="button" className="btn">
              수정
        </button>
        </Link>
        <button type="button" className="btn"
        onClick={()=>{dispatch(deletePostDB(param))}}>
              삭제
        </button>
      </div>
    </div>
  );
};

export default Detail;
