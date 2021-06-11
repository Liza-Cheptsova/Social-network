import React, { ChangeEvent } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";
import { DialogPageType } from "../../redux/types";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../utils/validate/Validate";
import { required } from "../../utils/validate/validators";

type PropsType = {
  dialogsPage: DialogPageType;
  sendMessageCreator: (newMessage: string) => void;
};

// const maxLength = maxLength(10);

const Dialogs = (props: PropsType) => {
  const dialogsElement = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />);
  const messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id} />);

  const onSubmit = (value: any) => {
    props.sendMessageCreator(value.newMessage);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.contentWrapper}>
        <div className={classes.dialogsItems}>{dialogsElement}</div>
        <div className={classes.messages}>
          <div>{messagesElements}</div>
          <AddMessagesForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

const AddMessages = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newMessage' component={Textarea} validate={[required]} placeholder='type message' />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const AddMessagesForm = reduxForm({
  form: "addMessage",
})(AddMessages);
