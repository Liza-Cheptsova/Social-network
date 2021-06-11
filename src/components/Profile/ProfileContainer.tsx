import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, ProfileResponseType, setUserProfileCreator } from "../../redux/profilePageReducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RootReduxState } from "../../redux/store";
import { AuthRedirectComponent } from "../HOC/AuthRedirectComponent";
import { compose } from "redux";

export type ProfileMapStateToPropsType = {
  profile: ProfileResponseType | null;
  authoraizedUserId: number | null;
  isAuth: boolean;
};

type RouteType = {
  userId: any;
};

type ProfileMapDispatchToPropsType = {
  setUserProfileCreator: (profile: ProfileResponseType) => void;
  getProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
};

type PropsType = RouteComponentProps<RouteType> & ProfileMapStateToPropsType & ProfileMapDispatchToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = "5740";
      userId = this.props.authoraizedUserId;
      console.log("userId: ", typeof userId);
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootReduxState): ProfileMapStateToPropsType => ({
  profile: state.profilePage.profile,
  authoraizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { setUserProfileCreator, getProfile, getStatus }),
  withRouter,
  AuthRedirectComponent
)(ProfileContainer);
