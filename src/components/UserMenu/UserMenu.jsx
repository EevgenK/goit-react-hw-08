import { useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { BsPersonCheckFill } from "react-icons/bs";
import authSelectors from "../../redux/auth/selectors";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const handleChange = (event) => {
    console.log("jk");
  };
  return (
    <div className={s.user}>
      <BsPersonCheckFill />
      <h5 className={s.greeting}>
        Hello <span>{userName}</span>
      </h5>

      <FormControlLabel
        className={s.switcher}
        control={
          <Switch
            checked={isLoggedIn}
            onChange={handleChange}
            aria-label="login switch"
          />
        }
        label={isLoggedIn ? "Logout" : "Login"}
      />
    </div>
  );
};

export default UserMenu;
