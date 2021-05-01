import { combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { profilePageReducer } from "./profilePageReducer";
import { usersPageReducer } from "./usersPageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  authorization: authReducer,
});

export type RootReduxState = ReturnType<typeof reducers>;

export let store = createStore(reducers);

// @ts-ignore
window.store = store;
