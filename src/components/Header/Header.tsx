import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { initialStateSetUserType } from "../../redux/authReducer";
import Navbar from "../NavBar/Navbar";

type authPropsType = {
  login: string | null;
  isAuth: boolean;
  setAuthUserData: (userData: initialStateSetUserType) => void;
};

const Header = (props: authPropsType) => {
  return (
    <div className={s.header_wrap}>
      <header className={s.header}>
        <Navbar />
        <div className={s.loginBlock}>
          {props.isAuth ? (
            "Привет, " + props.login + "!"
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
