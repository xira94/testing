
// import instance from '../shared/request'
import axios from "axios";


const ADD = "post/ADD"
const MODIFY = "post/MODIFY"
const DELETE = "post/DELETE"
const GET = "post/GET"

const initialState = {
  // postslist: {
  //   imageTest: "",
  //   title: "",
  //   content: ""
  // },
  // postList: [
  //   {
  //     postId: "",
  //     createdAt: "",
  //     title: "",
      
  //   },
  // ],
};

// Action creator

export function addPost(post){
  return {type: ADD, post}
}
export function modifyPost(post, postID){
  return {type: MODIFY, post, postID }
}
export function deletePost(postID){
  return {type: DELETE, postID}
}
export function getPostList(post_list){
  return {type: GET, post_list }
}

// middleWare

// export const loadPostDB = () => {
//   return async function (dispatch){
//     const post_data = await axios.post("http://sparta-swan.shop/api/posts", {
//       headers: { "Content-Type": "application/json" }
//     })
//     .then(response => {
//       console.log('서버 postslist에는', response.data)
//       const post_list= []
//       response.data.forEach(v => {
//         post_list.push({...v})
//       });
//       console.log('메인에 들어갈 데이터는',post_list)
//       dispatch(loadPost(post_list))
//     })
//   }
// }
export const getPostListDB = () => async (dispatch) => {
  try {
    const data = await axios.get("http://sparta-swan.shop/api/posts");
    dispatch(getPostList(data.data.postslist));
    console.log('sadf')
    console.log(data.data.postslist);
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};

export const addPostDB = (data) => {
  return async function (dispatch, getState) {
    await axios
      .post("http://sparta-swan.shop/api/posts", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const modifyPostDB = (data, postId) => {
  return async function (dispatch, getState) {
    const post_data = await axios
      .put(`http://sparta-swan.shop/api/posts/${postId}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        
        dispatch(modifyPost(post_data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 게시물 삭제
export const deletePostDB = (postId) => {
  return async function (dispatch) {
    await axios
      .delete(`http://sparta-swan.shop/api/posts/${postId}`,
      // {
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // }
      )
      .then((res) => {
        dispatch(deletePost(postId));
        window.location.assign("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



//reducer

export default function reducer(state = initialState, action={}){
  switch(action.type){
    
    case "post/ADD":{
      const new_post_list = [ action.post_list, ...state.posts];
      return {posts: new_post_list}

    }
    case "post/MODIFY": {
      const modify_post = [{ ...action.post_list }];
      return { posts: modify_post };
    }

    case "post/GET":{
      return {posts: action.post_list}
    }
    case "post/DELETE":{
      console.log(state.posts)
      const new_post_list= state.posts.filter((l,i)=>{
        console.log(action.id.id)
        return action.id.id !== l.id
      })
      return {posts: new_post_list}

    }

    default:
      return state;
  }
}
