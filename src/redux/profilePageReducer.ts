import { profileAPI } from "../api/api";

type ActionsType =
  | ReturnType<typeof addPostCreator>
  | ReturnType<typeof updateNewPostCreator>
  | ReturnType<typeof setUserProfileCreator>
  | ReturnType<typeof setStatus>;

export type InitialProfileStateType = {
  posts: Array<PostType>;
  newPostText: string;
  profile: ProfileResponseType | null;
  status: string;
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfileResponseType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    github: string;
    instagram: string;
    mainLink: string;
    twitter: string;
    vk: string;
    website: string;
    youtube: string;
  };
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: {
    large: string;
    small: string;
  };
  userId: number | string;
};

let initialState: InitialProfileStateType = {
  posts: [
    { id: 1, message: "Hi", likesCount: 3 },
    { id: 2, message: "How r u", likesCount: 5 },
    { id: 3, message: "it's my first post", likesCount: 13 },
    { id: 4, message: "Любишь пёсиков? =)", likesCount: 33 },
    { id: 5, message: "London is a capital of great Britain", likesCount: 7 },
    { id: 6, message: "Live Belarus!", likesCount: 345 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

export const profilePageReducer = (
  state: InitialProfileStateType = initialState,
  action: ActionsType
): InitialProfileStateType => {
  switch (action.type) {
    case "UPDATE_NEW_POST_TEXT": {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    case "ADD_POST": {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }

    case "SET_STATUS": {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const addPostCreator = (newPostText: string) => {
  return {
    type: "ADD_POST",
    newPostText: newPostText,
  } as const;
};

export const updateNewPostCreator = (newText: string) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newText: newText,
  } as const;
};

export const setUserProfileCreator = (profile: ProfileResponseType) => {
  return {
    type: "SET_USER_PROFILE",
    profile,
  } as const;
};

export const setStatus = (status: string) => {
  return {
    type: "SET_STATUS",
    status,
  } as const;
};

export const getProfile = (userId: string) => (dispatch: any) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfileCreator(data));
  });
};

export const getStatus = (userId: string) => (dispatch: any) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status: string) => (dispatch: any) => {
  profileAPI
    .updateStatus(status)
    .then((res) => {
      if (res.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
    .catch((e) => console.log(e));
};
