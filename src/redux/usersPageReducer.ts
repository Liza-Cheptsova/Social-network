import { usersAPI } from "../api/api";
import { UserType } from "./types";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [0],
};
type InitialType = typeof initialState;

export const usersPageReducer = (state: InitialType = initialState, action: ActionsType): InitialType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return { ...state, users: action.users };

    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage };

    case "SET_TOTAL_COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;

    case "TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching };

    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter((id) => id !== action.userId),
      };
  }
};
type ActionsType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingInProgress>;

export const follow = (userId: number) => ({ type: "FOLLOW", userId } as const);

export const unfollow = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};
export const setUsers = (users: UserType[]) => {
  return {
    type: "SET_USERS",
    users,
  } as const;
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: "SET_CURRENT_PAGE",
    currentPage,
  } as const;
};

export const setTotalUsersCount = (totalUsersCount: number) =>
  ({
    type: "SET_TOTAL_COUNT",
    totalUsersCount,
  } as const);

export const toggleIsFetching = (isFetching: boolean) =>
  ({
    type: "TOGGLE_IS_FETCHING",
    isFetching,
  } as const);

export const toggleFollowingInProgress = (isFetching: boolean, userId: number) =>
  ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId,
  } as const);

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const unfollowThunk = (userId: number) => (dispatch: any) => {
  dispatch(toggleFollowingInProgress(true, userId));
  usersAPI.unFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  });
};

export const followThunk = (userId: number) => (dispatch: any) => {
  console.log(userId);
  dispatch(toggleFollowingInProgress(true, userId));
  usersAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  });
};
