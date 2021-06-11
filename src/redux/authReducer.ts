import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const initialState: initialStateSetUserType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export type initialStateSetUserType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export const authReducer = (state: initialStateSetUserType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof setAuthUserData>;

// export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
//   return {
//     type: "SET_USER_DATA",
//     payload: { id, email, login, isAuth },
//   } as const;
// };

export const setAuthUserData = (payload: initialStateSetUserType) => {
  return {
    type: "SET_USER_DATA",
    payload,
  } as const;
};

export const authThunk = () => (dispatch: any) => {
  authAPI.getAuth().then((res) => {
    if (res.data.resultCode === 0) {
      let { id, email, login } = res.data.data;
      dispatch(setAuthUserData({ id, email, login, isAuth: true }));
    }
  });
};

export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
  authAPI.logIn(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authThunk());
    } else {
      const message = data.messages.length > 0 ? data.messages[0] : "some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logoutThunk = () => (dispatch: any) => {
  authAPI.logOut().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData({ id: null, email: null, login: null, isAuth: false }));
    }
  });
};
