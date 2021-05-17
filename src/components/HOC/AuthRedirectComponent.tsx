import React from "react";
import { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootReduxState } from "../../redux/store";

type mapStateType = {
  isAuth: boolean;
};

let mapStateForAuth = (state: RootReduxState): mapStateType => {
  return { isAuth: state.auth.isAuth };
};

export function AuthRedirectComponent<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateType) => {
    let { isAuth, ...restProps } = props;
    return !props.isAuth ? <Redirect to={"/login"} /> : <Component {...(restProps as T)} />;
  };

  let ConnetedAuthRedirectComponent = connect(mapStateForAuth)(RedirectComponent);

  return ConnetedAuthRedirectComponent;
}
