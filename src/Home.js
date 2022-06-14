import React from "react";
import "./css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const toWrite = () => {
    navigate("/Write");
  };
  // const is_login = useSelector((state) => state.user.is_login);
  return (
    <div className="main">
      <h1>Top5</h1>
      <div className="img_collection">
        <div className="img_home">
          <img
            alt="test"
            src="https://target.scene7.com/is/image/Target/GUEST_a9b424c4-22ac-42ab-aaa9-8f2ed82dfbb0"
          ></img>
          <div className="inner_image">
            <p>Name</p>
            <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
          </div>
        </div>
        <div className="img_home">
          <img
            alt="test"
            src="https://s2.r29static.com/bin/entry/90b/x/2103651/image.png"
          ></img>
          <div className="inner_image">
            <p>Name</p>
            <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
          </div>
        </div>
        <div className="img_home">
          <img
            alt="test"
            src="https://target.scene7.com/is/image/Target/GUEST_b8531900-5419-4d3c-bf3c-3cdbd75a2e3f"
          ></img>
          <div className="inner_image">
            <p>Name</p>
            <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
          </div>
        </div>
        <div className="img_home">
          <img
            alt="test"
            src="https://images.heb.com/is/image/HEBGrocery/000836123?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
          ></img>
          <div className="inner_image">
            <p>Name</p>
            <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
          </div>
        </div>
        <div className="img_home">
          <img
            alt="test"
            src="https://target.scene7.com/is/image/Target/GUEST_b75d74b7-e711-4bc5-9eb1-d0577622b3e2?wid=488&hei=488&fmt=pjpeg"
          ></img>
          <div className="inner_image">
            <p>Name</p>
            <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
          </div>
        </div>
      </div>

      <hr className="one" />

      <div className="board">
        <div className="board_title">
          <h3>Board</h3>
          <div className="btn_post">
            <FontAwesomeIcon
              size="2x"
              color="rgb(48, 163, 63)"
              icon={faCirclePlus}
              onClick={toWrite}
            />
          </div>
        </div>
        <div className="img_collection">
          <div className="img_home">
            <img
              alt="test"
              src="https://target.scene7.com/is/image/Target/GUEST_a9b424c4-22ac-42ab-aaa9-8f2ed82dfbb0"
            ></img>
            <div className="inner_image">
              <p>Name</p>
              <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
            </div>
          </div>
          <div className="img_home">
            <img
              alt="test"
              src="https://s2.r29static.com/bin/entry/90b/x/2103651/image.png"
            ></img>
            <div className="inner_image">
              <p>Name</p>
              <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
            </div>
          </div>
          <div className="img_home">
            <img
              alt="test"
              src="https://citycenterbishopranch.com/wp-content/uploads/2018/09/Tenant_Feature_Starbucks_d.jpg"
            ></img>
            <div className="inner_image">
              <p>Name</p>
              <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
            </div>
          </div>
          <div className="img_home">
            <img
              alt="test"
              src="https://images.heb.com/is/image/HEBGrocery/000836123?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
            ></img>
            <div className="inner_image">
              <p>Name</p>
              <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
            </div>
          </div>
          <div className="img_home">
            <img
              alt="test"
              src="https://target.scene7.com/is/image/Target/GUEST_b75d74b7-e711-4bc5-9eb1-d0577622b3e2?wid=488&hei=488&fmt=pjpeg"
            ></img>
            <div className="inner_image">
              <p>Name</p>
              <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
