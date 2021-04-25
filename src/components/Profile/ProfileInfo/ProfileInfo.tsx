import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileResponseType } from "../../../redux/types";

type profileInfoPropsType = {
  profile: ProfileResponseType | null;
};

const ProfileInfo = (props: profileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return <div></div>;
};

export default ProfileInfo;
