import React from "react";
import { connect } from "react-redux";
import { follow, getUsers, setCurrentPage, toggleFollowingInProgress, unfollow, unfollowThunk } from "../../redux/usersPageReducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { RootReduxState } from "../../redux/store";
import { UsersPageType, UserType } from "../../redux/types";
import { followThunk } from "./../../redux/usersPageReducer";

type MSTPropsType = {
  userPage: UsersPageType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: 1 | number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

type MDTPropsType = {
  followThunk: (userId: number) => void;
  unfollowThunk: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = MSTPropsType & MDTPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.userPage.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.userPage.users}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.onPageChanged}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootReduxState): MSTPropsType => {
  return {
    userPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
})(UsersContainer);
