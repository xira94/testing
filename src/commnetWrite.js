import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentFB, addCommentFB } from "./redux/moduels/comment";
import "./css/Detail.css";

const Comment = ({ postId }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = React.useState("");

  const data = useSelector((state) => state.comment.comments);

  React.useEffect(() => {
    dispatch(loadCommentFB(postId));
  }, [data]);

  const addcomment = () => {
    dispatch(addCommentFB(postId, comment));
  };

  return (
    <div>
      {data.map((list, index) => {
        return (
          <div>
            <section>
              <div className="row">
                <div className="col-sm-5 col-md-6 col12 pb-4">
                  <h2>Comments</h2>
                  <div className="text-justify darker mt-4 float-right">
                    <h4>{list.nickname}</h4>
                    <p>{list.comment}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
      <section className="data-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
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
