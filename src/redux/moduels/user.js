// user.js
import axios from "axios";

// Actions
// const ACCOUNT = "user/ACCOUNT";
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
  user: '',
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
      .post("http://sparta-swan.shop/api/register", {
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
<<<<<<< HEAD
  return function (dispatch) {
    // console.log(userId, password)
    // window.alert(password)
    axios
=======
  return async function (dispatch) {
    await axios

>>>>>>> 44e33651e636bbe3ca6d198222c11df2313b212c
      .post("http://sparta-swan.shop/api/login", {
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

<<<<<<< HEAD

// export const logincheckDB = () => {
//   return async function (dispatch) {
//     const _logincheck = await axios
//       .get("")
//       .then((response) => {
//         console.log(response);

//         localStorage.setItem("loginUserId", response.data.userId);
//         localStorage.setItem("loginUserName", response.data.nickname);


//         dispatch(LOGIN_CHECK(response.data.userId, response.data.nickname));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };
=======
>>>>>>> 44e33651e636bbe3ca6d198222c11df2313b212c
export const logincheckDB = () => {
  return function (dispatch) {
    const userId = localStorage.getItem("token");
    const tokenCheck = document.cookie;
    // console.log(userId)
    if (userId) {
      dispatch(logInUser({ userId: userId }));
    } else {
      dispatch(logOutUser());
    }
  };
};


<<<<<<< HEAD

export const idCheckFB = (userId) => {
  // console.log(userId);
  return async function () {
    const _idCheck = await axios
      .get(`http://sparta-swan.shop/api/login/api/user/${userId}`)
      .then((response) => {
        console.log(response);
        const message = response.data.message;
        window.alert(message);
=======
        dispatch(LOGIN_CHECK(response.data.userId, response.data.nickname));
>>>>>>> 44e33651e636bbe3ca6d198222c11df2313b212c
      })
      .catch((error) => {
        console.error(error);
        const error_message = error.response.data.errorMessage;
        window.alert(error_message);
      });
  };
};

<<<<<<< HEAD
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

=======
>>>>>>> 44e33651e636bbe3ca6d198222c11df2313b212c
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
