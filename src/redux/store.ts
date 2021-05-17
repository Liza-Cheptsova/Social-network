import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { profilePageReducer } from "./profilePageReducer";
import { usersPageReducer } from "./usersPageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

export type RootReduxState = ReturnType<typeof reducers>;

export let store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
