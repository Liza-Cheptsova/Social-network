import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { AppStateType } from "../../redux/types";
import { AuthRedirectComponent } from "../HOC/AuthRedirectComponent";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    onNewMessageChange: (text: string) => {
      dispatch(updateNewMessageBodyCreator(text));
    },
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), AuthRedirectComponent)(Dialogs);
