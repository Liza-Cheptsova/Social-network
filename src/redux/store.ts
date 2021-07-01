import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { profilePageReducer } from "./profilePageReducer";
import { usersPageReducer } from "./usersPageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { appReducer } from "./appReduce";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

export type RootReduxState = ReturnType<typeof reducers>;

export let store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
