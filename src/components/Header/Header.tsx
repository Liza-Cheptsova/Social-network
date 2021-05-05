import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Navbar from "../NavBar/Navbar";
import { ProfileResponseType } from "../../redux/profilePageReducer";
import defaultAvatar from "../../assets/images/ava.jpg";

type authPropsType = {
  login: string | null;
  isAuth: boolean;
  profile: ProfileResponseType | null;
};

const Header = (props: authPropsType) => {
  return (
    <div className={s.header_wrap}>
      <header className={s.header}>
        <div className={s.ava_wrap}>
          <div className={s.ava}>
            <img src={props.profile?.photos.large ? props.profile?.photos.large : defaultAvatar} />
          </div>
          <h3>{props.profile?.fullName}</h3>
          <p>{props.profile?.aboutMe}</p>
        </div>

        <Navbar />
        <div className={s.loginBlock}>{props.isAuth ? "Привет, " + props.login + "!" : <NavLink to={"/login"}>Login</NavLink>}</div>
      </header>
    </div>
  );
};

export default Header;
