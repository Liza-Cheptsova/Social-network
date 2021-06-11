import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Navbar from "../NavBar/Navbar";
import { ProfileResponseType } from "../../redux/profilePageReducer";
import defaultAvatar from "../../assets/images/ava.jpg";
import { Status } from "./Status/Status";

type authPropsType = {
  login: string | null;
  isAuth: boolean;
  profile: ProfileResponseType | null;
  status: string;
  setStatus: (status: string) => void;
  updateStatus: (status: string) => void;
  logout: () => void;
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
          <Status status={props.status} setStatus={props.setStatus} updateStatus={props.updateStatus} />
        </div>

        <Navbar />
        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div>
              {"Привет, " + props.login + "!"}
              <button onClick={props.logout} className={s.logoutBtn}>
                logOut
              </button>
            </div>
          ) : (
            <NavLink to={"/login"} className={s.login}>
              Login
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
