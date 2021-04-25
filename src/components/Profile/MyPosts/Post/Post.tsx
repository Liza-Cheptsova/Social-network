import React from "react";
import classes from "./Post.module.css";
import ava from "../../../../assets/images/ava.jpg";

type PropsType = {
  message: string;
  likesCount: number;
};

const Post = (props: PropsType) => {
  return (
    <div className={classes.post_wrap}>
      <div className={classes.post_header}>
        <div className={classes.imgWrapper}>
          <img src={ava} alt="Jang" />
          <div className={classes.titles}>
            <h4>Full Name</h4>
            <span>22 апр. 2021г</span>
          </div>
        </div>

        <div className={classes.likes}>
          <i>&hearts;</i>
          {props.likesCount}
        </div>
      </div>

      <p className={classes.messageContent}>{props.message}</p>
    </div>
  );
};

export default Post;
