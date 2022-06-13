import axios from 'axios';

const LOAD = "post/LOAD"
const ADD = "post/ADD"
const MODIFY = "post/MODIFY"
const DELETE = "post/DELETE"

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
export function loadPost(post_list){
  return {type:LOAD, post_list}
}
export function addPost(post_list){
  return {type:ADD, post_list}
}
export function modifyPost(post_list, id){
  return {type:MODIFY, post_list, id}
}
export function deletePost(id){
  return {type:DELETE, id}
}

// middleWare
export const loadPostDB = () => {
  return async function (dispatch){
    const post_data = await axios.get("http://localhost:5001/posts")
    .then(response => {
      // console.log(response.data)
      const post_list= []
      response.data.forEach(v => {
        post_list.push({...v})
      });
      dispatch(loadPost(post_list))
    })
  }
}
export const addPostDB = (post_list) => {
  return async function (dispatch){
    const post_data = await axios.post("http://localhost:5001/posts", post_list)
    .then(response => { console.log(response) })

    dispatch(addPost(post_data))
  }
}


//reducer
export default function reducer(state = initialState, action={}){
  switch(action.type){
    case "post/LOAD":{
      return {posts: action.post_list}
    }
    case "post/ADD":{
      const new_post_list = [ action.post_list, ...state.posts];
      return {posts: new_post_list}
    }
    
    default:
      return state;
  }
}