import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile" activeClassName={s.activeLink}>
        Профиль
      </NavLink>

      <NavLink to="/users" activeClassName={s.activeLink}>
        Пользователи
      </NavLink>

      <NavLink to="/dialogs" activeClassName={s.activeLink}>
        Сообщения
      </NavLink>

      <NavLink to="/news" activeClassName={s.activeLink}>
        News
      </NavLink>

      {/* <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div> */}
    </nav>
  );
};

export default Navbar;
