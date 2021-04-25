import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from "../../redux/types";

type ProfilePropsType = {
  profile: ProfileResponseType | null;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
