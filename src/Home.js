import React from "react";
import "./css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPostListDB } from "./redux/moduels/post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getPostListDB());
  }, []);

  const data = useSelector((state) => state.post.posts);
  // console.log(typeof(data[0]._id))

  // const toWrite = () => {
  //   navigate("/write");
  // };
  return (
    <div className="main">
      <h1>Starbucks Secret Menu</h1>
      <div className="image-banner">
        <img
          src="https://www.baltcoffee.com/sites/default/files/styles/slideshow/public/slideshow/coffee-wide-wallpaper-514611.jpg?itok=Fjn2iYfE"
          alt="image"
        ></img>
      </div>
      {/* <hr className="one" /> */}
      <div className="board">
        <h3>My Menu List</h3>
        <div className="board_title">
          <Link to="/write">
            <div className="btn_post">
              <FontAwesomeIcon size="2x" color="#186d51" icon={faCirclePlus} />
            </div>
          </Link>
        </div>
        <div className="img_collection">
          {data &&
            data.map((list, i) => {
              return (
                <div className="img_home" key={i}>
                  <Link to={`post/${data[i]._id}`}>
                    <img
                      // navigate to ={`post/${data[i]._id}`}
                      alt={data.length !== 0 && data[i].title}
                      src={`http://sparta-swan.shop/${data[i].imageUrl}`}
                    ></img>
                  </Link>
                  <div className="inner_image">
                    <p>{data.length !== 0 && data[i].title}</p>
                    <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
