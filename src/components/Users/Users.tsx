import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import userPhoto from "../../assets/images/ava.jpg";
import { UserType } from "../../redux/types";
import { followThunk, unfollowThunk } from "./../../redux/usersPageReducer";

type UsersPageType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: UserType[];
  followThunk: (userId: number) => void;
  unfollowThunk: (userId: number) => void;
  followingInProgress: Array<number>;
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => void;
};

export const Users = (props: UsersPageType) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  if (pageCount > 20) {
    if (props.currentPage > 5) {
      for (let i = props.currentPage - 9; i <= props.currentPage + 9; i++) {
        pages.push(i);
        if (i == pageCount) break;
      }
    } else {
      for (let i = 1; i <= 20; i++) {
        pages.push(i);
        if (i == pageCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div className={styles.pagination}>
        {pages.map((p, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === p ? styles.selectedPage : ""}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      <div className={styles.users_container}>
        {props.users.map((u) => (
          <div key={u.id} className={styles.user_wrap}>
            <div className={styles.ava_title}>
              <div className={styles.user_avatar}>
                <NavLink to={"/profile/" + u.id}>
                  <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt="smile" />
                </NavLink>
              </div>
              <p>{u.name}</p>
            </div>

            <div>
              {u.followed ? (
                <button
                  className={styles.btn}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunk(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  className={styles.btn}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
