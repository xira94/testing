import instance from "../shared/request";

const LOAD_COMMENT = "comment/LOAD_COMMENT";
const ADD_COMMENT = "comment/ADD_COMMENT";
// const EDIT_COMMENT = "comment/EDIT_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

const initialState = {
  comments: [],
};

export const loadComment = (comment_list) => {
  return { type: LOAD_COMMENT, comment_list };
};

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment };
};

// middlewares
export const loadCommentFB = (postId) => {
  console.log(postId);
  return async function (dispatch) {
    const _loadcomment = await instance
      .get(`/api/comments/${postId}`)
      .then((response) => {
        console.log(response);

        const comment_list = response.data.comment;
        console.log(comment_list);

        dispatch(loadComment(comment_list));
      })
      .catch((error) => {
        console.log(error);
        const err_message = error.response.data.errorMessage;
        window.alert(err_message);
      });
  };
};

export const addCommentFB = (postId, comment) => {
  console.log(postId, comment);
  return async function (dispatch) {
    const _addcomment = await instance
      .post(
        `/api/comments/${postId}`,
        {
          comment: comment,
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((response) => {
        console.log(response);

        const message = response.data.message;
        window.alert(message);

        dispatch(addComment(comment));
      })
      .catch((error) => {
        console.log(error);
        const err_message = error.response.data.errorMessage;
        window.alert(err_message);
      });
  };
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "comment/LOAD_COMMENT":
      return { comments: action.comment_list };

    case "comment/ADD_COMMENT": {
      const new_comment_list = [...state.comments, action.comment];
      return { comments: new_comment_list };
    }

    case "comment/DELETE_COMMENT": {
      const new_comment_list = state.comments.filter((l) => {
        return parseInt(action.commentId) !== l.commentId;
      });
      return { comments: new_comment_list };
    }
    default:
      return state;
  }
}
