import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/selectors";
import CabinIcon from "@mui/icons-material/Cabin";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ul className={s.navigation}>
      <li>
        <NavLink className={s.link} to="/">
          <CabinIcon fontSize="large" color="secondary" />
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
