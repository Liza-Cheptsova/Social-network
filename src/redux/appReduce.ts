import { authAPI } from "../api/api";
import { authThunk } from "./authReducer";

const initialState: initialStateSetUserType = {
  initialazed: false,
};

export type initialStateSetUserType = {
  initialazed: boolean;
};

export const appReducer = (state: initialStateSetUserType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "INITIALAZED-SUCSSES": {
      return {
        ...state,
        initialazed: true,
      };
    }
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof isInitialazedSusses>;

export const isInitialazedSusses = () => {
  return {
    type: "INITIALAZED-SUCSSES",
  } as const;
};

export const initialazedThunk = () => (dispatch: any) => {
  const promise = dispatch(authThunk());
  Promise.all([promise]).then(() => dispatch(isInitialazedSusses()));
};
