import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { getProfile, ProfileResponseType, setUserProfileCreator } from "../../redux/profilePageReducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RootReduxState } from "../../redux/store";

export type ProfileMapStateToPropsType = {
  profile: ProfileResponseType | null;
};

type RouteType = {
  userId: string;
};

type ProfileMapDispatchToPropsType = {
  setUserProfileCreator: (profile: ProfileResponseType) => void;
  getProfile: (userId: string) => void;
};

type PropsType = RouteComponentProps<RouteType> & ProfileMapStateToPropsType & ProfileMapDispatchToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getProfile(userId);
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
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileCreator, getProfile })(withUrlDataContainerComponent);
