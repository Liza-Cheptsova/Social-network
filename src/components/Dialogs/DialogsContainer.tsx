import React from "react";
import { sendMessageCreator } from "../../redux/dialogsPageReducer";
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, { sendMessageCreator }),
  AuthRedirectComponent
)(Dialogs);
