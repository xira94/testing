import instance from "../shared/requset";

const LOAD = "post/LOAD";
const ADD = "post/ADD";
const MODIFY = "post/MODIFY";
const DELETE = "post/DELETE";

const initialState = {
  posts: [
    // {
    //   "id": "",
    //   "name": "",
    //   "img": "",
    //   "title": "",
    //   "txt": ""
    // },
  ],
};

// Action creator
export function loadPost(post_list) {
  return { type: LOAD, post_list };
}
export function addPost(post_list) {
  return { type: ADD, post_list };
}
export function modifyPost(post_list) {
  return { type: MODIFY, post_list };
}
export function deletePost(id) {
  return { type: DELETE, id };
}

// middleWare
export const loadPostDB = () => {
  return async function (dispatch) {
    const post_data = await instance.get("").then((response) => {
      // console.log(response.data)
      const post_list = [];
      response.data.forEach((v) => {
        post_list.push({ ...v });
      });
      dispatch(loadPost(post_list));
    });
  };
};
export const addPostDB = (data) => {
  return async function (dispatch) {
    const post_data = await instance
      .post("", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        dispatch(addPost(post_data));
      });
  };
};

export const modifyPostDB = (data, postId) => {
  return async function (dispatch, getState) {
    const post_data = await instance
      .put(`${postId}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        // const willModifyData = response.data.filter((v,i)=> v.id === id)
        // console.log(willModifyData) // 수정할 콘텐츠 내용 찾음
        // willModifyData.id.replace({...post_list})
        // console.log(willModifyData) // 수정할 내용 넣기
        // const modified_post_list = {...post_list}
        // console.log(modified_post_list) // 수정할 내용대로 담음
        // // const result = [...response.data, modified_post_list];
        // // console.log(result)
        // // response.data.forEach(v => {
        // //   modified_post_list.push({...v})
        // // });
        dispatch(modifyPost(post_data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deletePostDB = (postId) => {
  return async function (dispatch, getState) {
    const post_data = await instance
      .delete(`/api/posts/${postId}`, postId, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        params: {
          postId: postId,
        },
      })
      .then((response) => {
        console.log(response);
        const _post_list = getState().post.posts;
        const post_id = _post_list.find((v) => {
          return v.id === postId;
        });
        dispatch(deletePost(post_id));
      });
  };
};

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      return { posts: action.post_list };
    }
    case "post/ADD": {
      const new_post_list = [action.post_list, ...state.posts];
      return { posts: new_post_list };
    }
    case "post/MODIFY": {
      const modify_post = [{ ...action.post_list }];
      return { posts: modify_post };
    }
    case "post/DELETE": {
      console.log(state.posts);
      const new_post_list = state.posts.filter((l, i) => {
        console.log(action.id.id);
        return action.id.id !== l.id;
      });
      return { posts: new_post_list };
    }

    default:
      return state;
  }
}
