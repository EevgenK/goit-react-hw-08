import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul className={s.navigation}>
      <li>
        <NavLink className={s.link} to="/register">
          register
        </NavLink>
      </li>
      <li>
        <NavLink className={s.link} to="/login">
          login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
