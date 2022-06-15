import instance from '../shared/request'
import axios from "axios";


const ADD = "post/ADD"
const MODIFY = "post/MODIFY"
const DELETE = "post/DELETE"
const GET = "post/GET"

const initialState = {
  posts: [
    // {
    //   "id": "",
    //   "name": "",
    //   "img": "",
    //   "title": "",
    //   "txt": ""
    // },
  ]
}

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
    const { data } = await axios.get("http://sparta-swan.shop/api/posts");
    dispatch(getPostList(data.postslist));
    console.log(data.postslist);
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};

export const addPostDB = (data) => {
  return async function (dispatch, getState) {
    await axios
      .post("http://sparta-swan.shop/posts", data, {
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

// export const addPostDB = (data) => {
//   console.log('추가')
//   return async function (dispatch){
//     const post_data = await axios.post("http://sparta-swan.shop/api/posts", data)
//     // {
//     //   headers: {'Authorization':`Bearer ${localStorage.getItem("token")}`},
//     // })
//     .then(response => { console.log(response.postslist) 
//       dispatch(addPost(post_data))
//     })
    
    
//   }
// }

export const modifyPostDB = (data, postId) => {
  return async function (dispatch, getState){
    const post_data = await instance.put(`/api/posts/${postId}`, data,
    {
      headers: {'Authorization':`Bearer ${localStorage.getItem("token")}`},
    })
    .then(response => { console.log(response)
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
      dispatch(modifyPost(post_data))
    }).catch(error => {console.log(error)})
    
  }
}

export const deletePostDB = (postId) => {
  return async function (dispatch, getState){
    const post_data = await instance.delete(`/api/posts/${postId}`, postId,
    {
      headers: {'Authorization':`Bearer ${localStorage.getItem("token")}`},
      params: {
        postId: postId
      },
    
    })
    .then(response => {
      console.log(response)
      const _post_list = getState().post.posts;
      const post_id = _post_list.find((v)=>{
      return v.id === postId
    })
      dispatch(deletePost(post_id))
    })

    
    
  }
}




//reducer
export default function reducer(state = initialState, action={}){
  switch(action.type){
    
    case "post/ADD":{
      const new_post_list = [ action.post_list, ...state.posts];
      return {posts: new_post_list}
    }
    case "post/MODIFY":{
      const modify_post = [{...action.post_list}]
      return {posts: modify_post}
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