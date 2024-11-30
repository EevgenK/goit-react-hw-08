import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ul className={s.navigation}>
      <li>
        <NavLink className={s.link} to="/">
          home page
        </NavLink>
      </li>
      <li>
        {isLoggedIn && (
          <NavLink className={s.link} to="/contacts">
            contacts
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
