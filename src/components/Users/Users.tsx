import React, { FC, useEffect, useState } from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/ava.jpg";
import { UserType } from "../../redux/types";

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
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    if (currentPage <= 10 && currentPage <= pagesCount - 10) {
      let arr: number[] = [];
      for (let i = 1; i <= 20; i++) {
        arr = [...arr, i];
      }
      setPages(arr);
    } else if (currentPage <= 10 && currentPage <= pagesCount) {
      let arr: number[] = [];
      for (let i = 1; i <= pagesCount; i++) {
        arr = [...arr, i];
      }
      setPages(arr);
    } else if (currentPage >= 10 && currentPage <= pagesCount - 10) {
      let arr: number[] = [];
      for (let i = currentPage - 10; i <= currentPage + 9; i++) {
        arr = [...arr, i];
      }
      setPages(arr);
    } else if (currentPage >= 10 && currentPage <= pagesCount) {
      let arr: number[] = [];
      for (let i = pagesCount - 19; i <= pagesCount; i++) {
        arr = [...arr, i];
      }
      setPages(arr);
    }
  }, [currentPage, pagesCount]);

  return (
    <div>
      <div className={styles.users_container}>
        {users.map((u) => (
          <div key={u.id} className={styles.user_wrap}>
            <div className={styles.ava_title}>
              <div className={styles.user_avatar}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    className={styles.avatar}
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="smile"
                  />
                </NavLink>
              </div>
              <p>{u.name}</p>
            </div>

            <div>
              {u.followed ? (
                <button
                  className={styles.btn}
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    onUnfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  className={styles.btn}
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => onFollow(u.id)}
                >
                  follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {pages.map((p: number, index: number) => {
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
    </div>
  );
};
