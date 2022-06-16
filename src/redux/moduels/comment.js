import axios from "axios";
import instance from "../shared/request";

const LOAD_COMMENT = "comment/LOAD_COMMENT";
const ADD_COMMENT = "comment/ADD_COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

const initialState = {
  comments: [],
};

export const loadComment = (comment_list) => {
  return { type: LOAD_COMMENT, comment_list };
};

export const addComment = (comment_list) => {
  return { type: ADD_COMMENT, comment_list };
};

export const modifyComment = (comment_list) => {
  return { type: EDIT_COMMENT, comment_list };
};


export const deleteComment = (id) => {
  return { type: DELETE_COMMENT, id };
};


// middlewares

export const loadCommentDB = (postId) => async (dispatch) => {
  try {
    const data = await instance.get(`api/comment/${postId}`,
    {
     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
    )
    console.log(data)
    console.log(data.data.comments);
    dispatch(loadComment(data.data.comments));
    
    
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};

// export const loadCommenB = (postId) => {
//   // console.log(postId);
//   return async function (dispatch) {
//     const _loadcomment = await instance
//       .get(`/api/comment/${postId}`,
//       {
//         headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//       })
//       .then((response) => {
//         console.log(response.data);

//         const comment_list = response.data.comments;
//         console.log(comment_list);

//         dispatch(loadComment(comment_list));
//       })
//       .catch((error) => {
//         console.log(error);
//         const err_message = error.response.data.errorMessage;
//         window.alert(err_message);
//       });
//   };
// };

export const addCommentDB = (content, postId) => {
  console.log(postId);
  console.log(content);
  return async function (dispatch) {
    instance
      .post(
        `/api/comment`,
        {
          content: content,
          postId: postId
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((response) => {
        console.log(response);

        const message = response.data.message;
        // window.alert(message);
        
        // dispatch(addComment({content}));
         window.location.assign(`/post/${postId}`)
      })
      .catch((error) => {
        console.log(error);
        const err_message = error.response.data.errorMessage;
        window.alert(err_message);
      });
  };
};

export const modifyCommentDB = (data, postId) => {
  return async function (dispatch, getState) {

  }
}

export const deleteCommentDB = (commentId) => {
  console.log(commentId)
  return function (dispatch){
    instance.delete(`/api/comment/${commentId}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    )
    .then((res)=> {
      console.log(res)
      dispatch(deleteComment(commentId));
      // window.location.assign(`/`)
    })
    .catch((error)=> {
      console.log(error)
    })
  }
}

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "comment/LOAD_COMMENT":
      return { comments: action.comment_list };

    case "comment/ADD_COMMENT": {
      const new_comment_list = [ action.comment_list, ...state.comments];
      return { comments: new_comment_list };
    }
    case "post/MODIFY": {
      
      const modify_post = [ ...action.post_list ];
      console.log(modify_post)
      return { posts: modify_post };
    }

    case "comment/DELETE_COMMENT": {
      console.log(state.comments)
      const new_comment_list = state.comments.filter((l,i) => {
        // console.log(l._id)
        // console.log(action)
        return action.id !== l._id;
      });
      console.log(new_comment_list)
      return { comments: new_comment_list };
    }
    default:
      return state;
  }
}
