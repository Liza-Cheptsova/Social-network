import React, { ChangeEvent, KeyboardEventHandler } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../redux/types";
import ava from "../../../assets/images/ava.jpg";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../utils/validate/Validate";
import { maxLength, required } from "../../../utils/validate/validators";

type PropsType = {
  posts: PostType[];
  addPostCreator: (newPostText: string) => void;
};

const maxlength = maxLength(10);

const MyPosts = (props: PropsType) => {
  const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const addPost = (value: any) => {
    props.addPostCreator(value.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <div className={classes.add_post}>
        <img src={ava} />
        <AddPostForm onSubmit={addPost} />
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

const AddPost = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div className={classes.textarea_wrap}>
        <Field name='newPostText' component={Textarea} validate={[required, maxlength]} placeholder='type message' />
      </div>
      <div>
        <button className={classes.btn}>Add post</button>
      </div>
    </form>
  );
};

const AddPostForm = reduxForm({
  form: "addPost",
})(AddPost);
