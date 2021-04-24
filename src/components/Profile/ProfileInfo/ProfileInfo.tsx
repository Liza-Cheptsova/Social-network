import React from "react";
import classes from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";
import {ProfileResponseType} from "../../../redux/types";

type profileInfoPropsType = {
  profile: ProfileResponseType | null;
};

const ProfileInfo = (props: profileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg" alt=""/>
            </div> */}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
