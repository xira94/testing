
// import instance from '../shared/request'
import axios from "axios";


const ADD = "post/ADD"
const MODIFY = "post/MODIFY"
const DELETE = "post/DELETE"
const GET = "post/GET"

const initialState = {
  
};

// Action creator

export function addPost(post){
  return {type: ADD, post}
}
export function modifyPost(post){
  return {type: MODIFY, post}
}
export function deletePost(postID){
  return {type: DELETE, postID}
}
export function getPostList(post_list){
  return {type: GET, post_list }
}


// middleWare

export const getPostListDB = () => async (dispatch) => {
  try {
    const data = await axios.get("http://sparta-swan.shop/api/posts");
    dispatch(getPostList(data.data.postslist));
    // console.log(data.data.postslist);
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
        window.location.assign("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const modifyPostDB = (data, postId) => {
  return async function (dispatch, getState) {
    console.log(data, postId)
    // console.log(getState().post.posts)
    const _data = [...getState().post.posts]
    console.log(_data)
    const post_data = await axios
      .patch(`http://sparta-swan.shop/api/posts/${postId}` , data, 
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        _data.map((v,i)=>{
          if(v._id === postId){
            const _v = {...data, _id: v._id}
            return _v
          }
          
          return v;

        })
        console.log(_data)
        

        dispatch(modifyPost(_data));
      })
      .catch((error) => {
        console.log(error);
        const __data = _data.map((v,i)=>{
          if(v._id === postId){
            console.log(v)
            const _v = {...data, _id: v._id}
            return _v
          }
          
          return v;

        })
        console.log(__data)

        dispatch(modifyPost(__data));
      });
  };
};

// 게시물 삭제
export const deletePostDB = (postId) => {
  
  return function (dispatch) {
    axios
      .delete(`http://sparta-swan.shop/api/posts/${postId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
      )
      .then((res) => {
        dispatch(deletePost(postId));
        window.location.assign("/")
      })
      .catch((error) => {
        console.log(error);
        // window.location.assign("/")
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
      
      const modify_post = [ ...action.post ];
      console.log(modify_post)
      return { posts: modify_post };
    }

    case "post/GET":{
      return {posts: action.post_list}
    }
    case "post/DELETE":{
      console.log(state.posts)
      const new_post_list= state.posts.filter((l,i)=>{
        console.log(action)
        // window.alert('보자')
        return action.postID!== l._id
      })
      return {posts: new_post_list}

    }

    default:
      return state;
  }
}
