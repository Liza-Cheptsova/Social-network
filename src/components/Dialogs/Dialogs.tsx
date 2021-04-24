import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";
import {DialogPageType} from "../../redux/store";


type PropsType = {
    dialogsPage: DialogPageType
    sendMessage: () => void
    onNewMessageChange: (text: string) => void
}

const Dialogs = (props: PropsType) => {
    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    const newMessageBody = props.dialogsPage.newMessageBody;

    const sendMessage = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onNewMessageChange(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.contentWrapper}>
                <div className={classes.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='type message'/></div>
                        <div>
                            <button onClick={sendMessage}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;