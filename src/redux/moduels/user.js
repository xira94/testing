// user.js
import axios from "axios";

// Actions
// const ACCOUNT = "user/ACCOUNT";
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
  user: null,
  is_login: false,
};

// Action Creators

export function logInUser(user) {
  return { type: LOGIN, user };
}
export function logOutUser(user) {
  return { type: LOGOUT, user };
}

// middlewares

export const signupDB = (userId, nickname, password) => {
  return async function (dispatch, getState) {
    await axios
      .post("sparta-swan.shop/api/register", {
        userId: userId,
        nickName: nickname,
        password: password,
      })
      .then((user) => {
        console.log(user);
        window.alert("회원가입이 완료되었습니다.");
        window.location.assign("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("회원가입에 실패했습니다! 다시 시도해주세요");
        console.log(errorCode, errorMessage);
      });
  };
};

export const loginDB = (userId, password) => {
  return async function (dispatch) {
    await axios
      .post("sparta-swan.shop/api/login", {
        userId: userId,
        password: password,
      })
      .then((user) => {
        console.log(userId);
        localStorage.setItem("token", user.data.token);
        dispatch(
          logInUser({
            userId: userId,
          })
        );
        window.alert("환영합니다!");
        window.location.assign("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("로그인에 실패했습니다! 다시 시도해주세요");
        console.log(errorCode, errorMessage);
      });
  };
};

export const logincheckDB = () => {
  return function (dispatch) {
    const userId = localStorage.getItem("userId");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(logInUser({ userId: userId }));
    } else {
      dispatch(logOutUser());
    }
  };
};

export const logoutDB = () => {
  return function (dispatch) {
    localStorage.clear();
    dispatch(logOutUser());
    window.location.assign("/");
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      state.user = { ...action.user };
      console.log(state.user);
      state.is_login = true;
      return state;
    case LOGOUT:
      state.user = {};
      state.is_login = false;
      return state;
    default:
      return state;
  }
}
