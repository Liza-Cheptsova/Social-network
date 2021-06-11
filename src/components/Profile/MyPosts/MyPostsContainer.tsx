import { addPostCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/types";

let mapStateProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateProps, { addPostCreator })(MyPosts);

export default MyPostsContainer;
