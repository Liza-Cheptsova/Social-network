import React, { ChangeEvent, KeyboardEventHandler } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../redux/types";
import ava from "../../../assets/images/ava.jpg";

type PropsType = {
  posts: PostType[];
  addPost: () => void;
  newPostText: string;
  updateNewPostText: (text: string) => void;
};

const MyPosts = (props: PropsType) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const addPost = () => {
    if (props.newPostText.trim() !== "") {
      props.addPost();
    }
  };

  const addPostOnKeyPressHandler = (e: any) => {
    console.log(e);
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <div className={classes.add_post}>
        <img src={ava} />
        <div className={classes.textarea_wrap}>
          <textarea
            placeholder={"Введите текст"}
            onChange={onPostChange}
            value={props.newPostText}
            onKeyPress={addPostOnKeyPressHandler}
          />
        </div>
        <div>
          <button onClick={addPost} className={classes.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
