// user.js
import axios from "axios";

// Actions

// const ACCOUNT = "user/ACCOUNT";
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const LOGIN_CHECK = "user/LOGIN_CHECK";

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
export function logincheck(userId, nickname) {
  return { type: LOGIN_CHECK, userId, nickname };
}

//middlewares;
export const signupDB = (userId, nickname, password, passwordCheck) => {
  console.log(userId, nickname, password, passwordCheck);
  return async function (dispatch, getState) {
    //naigate 써주고, 이게 window.location.assign이고 난 필요없고.
    await axios
      .post("sparta-swan.shop/api/register", {
        userId: userId,
        nickname: nickname,
        password: password,
        passwordCheck: passwordCheck,
      })
      .then((user) => {
        console.log(user);
        window.alert("회원가입이 완료되었습니다.");
        window.location.assign("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("최현준");
        window.alert("회원가입에 실패했습니다! 다시 시도해주세요");
        console.log(errorCode, errorMessage);
      });
  };
};

export const loginDB = (userId, password) => {
  return async function (dispatch) {
    await axios
      .post("", {
        userId: userId,
        password: password,
      })
      .then((user) => {
        console.log(userId);
        localStorage.setItem("token", user.data.token);
        dispatch(logInUser());
        dispatch(logincheckDB());
        window.alert("환영합니다!");
        window.location.assign("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("로그인에 실패했습니다! 다시 시도해주세요요");
        console.log(errorCode, errorMessage);
      });
  };
};

export const logincheckDB = () => {
  return async function (dispatch) {
    const _logincheck = await axios
      .get("")
      .then((response) => {
        console.log(response);

        localStorage.setItem("loginUserId", response.data.userId);
        localStorage.setItem("loginUserName", response.data.nickname);

        dispatch(LOGIN_CHECK(response.data.userId, response.data.nickname));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// export const idCheckFB = (userId) => {
//   console.log(userId);
//   return async function () {
//     const _idCheck = await instance
//       .get(`/api/user//${userId}`)
//       .then((response) => {
//         console.log(response);
//         const message = response.data.message;
//         window.alert(message);
//       })
//       .catch((error) => {
//         console.error(error);
//         const error_message = error.response.data.errorMessage;
//         window.alert(error_message);
//       });
//   };
// };

// export const nicknameCheckFB = (nickname) => {
//   console.log(nickname);
//   return async function () {
//     const _nicknameCheck = await instance
//       .get(`/api/user//${nickname}`)
//       .then((response) => {
//         console.log(response);

//         const message = response.data.message;
//         window.alert(message);
//       })
//       .catch((error) => {
//         console.error(error);
//         const error_message = error.response.data.errorMessage;
//         window.alert(error_message);
//       });
//   };
// };

export const logoutDB = () => {
  return function (dispatch) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("is_login");
    dispatch(logOutUser());
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      state.user = { ...action.user };
      state.is_login = true;
      return state;
    case LOGOUT:
      state.user = {};
      state.is_login = false;
      return state;
    case LOGIN_CHECK:
      return { userId: action.userId, nickname: action.nickname };
    default:
      return state;
  }
}
