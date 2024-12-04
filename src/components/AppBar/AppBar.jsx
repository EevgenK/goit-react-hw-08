import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";
import authSelectors from "../../redux/auth/selectors";
import clsx from "clsx";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectLoggedIn);

  return (
    <header className={s.header}>
      <nav className={clsx("container", s.navigation)}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
