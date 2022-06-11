import React from "react";
import "./css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Detail = () => {
  return (
    <div className="Detail__container">
      <div className="img">
        <img src="https://images.unsplash.com/photo-1615679953957-340c5cb38bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcmJ1Y2tzJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></img>
      </div>
      <div className="faHeart">
        <FontAwesomeIcon size="lg" icon={faHeart} />
      </div>
      <h1>Drop Caps</h1>
      <hr />
      <div class="container">
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
          <div class="col-sm-5 col-md-6 col12 pb-4">
            <h2>Comments</h2>
            <div class="text-justify darker mt-4 float-right">
              <h4>Jhon Doe</h4>
              {/* <span>- 20 October, 2018</span> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus numquam assumenda hic aliquam vero sequi velit
              </p>
            </div>
            <div class="text-justify darker mt-4 float-right">
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
      <section class="data-search">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Comment"></input>
          <button type="button" class="btn">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Detail;
