import React, { FC } from "react";
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
  onFollow: (userId: number) => void;
  onUnfollow: (userId: number) => void;
  followingInProgress: Array<number>;
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => void;
};

export const Users: FC<UsersPageType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  onFollow,
  onUnfollow,
  followingInProgress,
  toggleFollowingInProgress,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  if (pageCount > 20) {
    if (currentPage > 5) {
      for (let i = currentPage - 9; i <= currentPage + 9; i++) {
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
              className={currentPage === p ? styles.selectedPage : ""}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      <div className={styles.users_container}>
        {users.map((u: any) => (
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
                  disabled={followingInProgress.some((id: any) => id === u.id)}
                  onClick={() => {
                    onUnfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button className={styles.btn} disabled={followingInProgress.some((id: any) => id === u.id)} onClick={() => onFollow(u.id)}>
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
