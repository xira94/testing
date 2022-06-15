import React from "react";
import "./css/Home.css";
import { useDispatch, useSelector,  } from 'react-redux';
import { Link  } from 'react-router-dom';
import { getPostListDB } from './redux/moduels/post'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  React.useEffect(() => {

    dispatch(getPostListDB());

  }, [dispatch]);

  const data = useSelector(state => state.post.posts)
  console.log(data)

  // const toWrite = () => {
  //   navigate("/write");
  // };
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
          <Link to ='/write'><div className="btn_post">
            <FontAwesomeIcon
              size="2x"
              color="#186d51"
              icon={faCirclePlus}
            />
          </div></Link>
        </div>
      <div className="img_collection">

      {data  && data.map((list,i)=> {
        return (
        <div className="img_home" key={i}>
          <Link to = {`write/detail/${data[i]._id}`}>
          <img
            alt={data.length !==0 && data[i].title}
            src={`http://sparta-swan.shop/${data[i].imageUrl}`}
          ></img>
          </Link>
          <div className="inner_image">
            <p>{data.length !==0 && data[i].title}</p>
            <FontAwesomeIcon size="lg" color="pink" icon={faHeart} />
          </div>
        </div>
        )
        })
      }
      </div>
      </div>
    </div>
  );
};

export default Home;
