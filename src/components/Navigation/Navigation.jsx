import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={s.navigation}>
      <li>
        <NavLink className={s.link} to="/">
          home page
        </NavLink>
      </li>
      <li>
        <NavLink className={s.link} to="/contacts">
          contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
