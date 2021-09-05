/** @format */

import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav__link}>
      <NavLink
        exact
        to="/"
        className={s.nav__page}
        activeClassName={s.new__navLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.nav__page}
        activeClassName={s.new__navLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
