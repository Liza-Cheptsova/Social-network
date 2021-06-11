export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
  status: string | null;
};

export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
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

type ProfilePageType = {
  posts: Array<PostType>;
  profile: ProfileResponseType | null;
};

export type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

export type AppStateType = {
  usersPage: UsersPageType;
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
};
