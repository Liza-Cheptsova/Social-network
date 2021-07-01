import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { initialStateSetUserType, setAuthUserData } from "../../redux/authReducer";
import { RootReduxState } from "../../redux/store";
import { ProfileResponseType, setStatus, updateStatus } from "../../redux/profilePageReducer";
import { logoutThunk } from "./../../redux/authReducer";

type mapStateToPropsType = {
  login: string | null;
  isAuth: boolean;
  profile: ProfileResponseType | null;
  status: string;
};

type mapDispatchType = {
  // setAuthUserData: (payload: initialStateSetUserType) => void;
  setStatus: (status: string) => void;
  // authThunk: () => void;
  updateStatus: (status: string) => void;
  logoutThunk: () => void;
};

type PropsType = mapStateToPropsType & mapDispatchType;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return (
      <Header
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        logout={this.props.logoutThunk}
      />
    );
  }
}

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default connect(mapStateToProps, { setStatus, updateStatus, logoutThunk })(HeaderContainer);
