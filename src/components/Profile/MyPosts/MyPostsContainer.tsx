import React from "react";
import { store } from "../../../redux/store";
import {
  addPostCreator,
  updateNewPostCreator,
} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {AppStateType} from "../../../redux/types";

let mapStateProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchProps = (dispatch: Dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator(store.getState().profilePage.newPostText));
    },
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateProps, mapDispatchProps)(MyPosts);

export default MyPostsContainer;
