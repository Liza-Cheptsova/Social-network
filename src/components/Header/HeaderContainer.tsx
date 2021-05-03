import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { initialStateSetUserType, setAuthUserData } from "../../redux/authReducer";
import { RootReduxState } from "../../redux/store";
import { ProfileResponseType } from "../../redux/profilePageReducer";
import { authThunk } from "./../../redux/authReducer";

type mapStateToPropsType = {
  login: string | null;
  isAuth: boolean;
  profile: ProfileResponseType | null;
};

type mapDispatchType = {
  setAuthUserData: (userData: initialStateSetUserType) => void;
  authThunk: () => void;
};

type PropsType = mapStateToPropsType & mapDispatchType;

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.authThunk();
  }

  render() {
    return <Header {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({
  login: state.authorization.login,
  isAuth: state.authorization.isAuth,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setAuthUserData, authThunk })(HeaderContainer);
