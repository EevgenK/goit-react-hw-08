import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { BsPersonCheckFill } from "react-icons/bs";
import authSelectors from "../../redux/auth/selectors";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const userName = useSelector(authSelectors.selectUserName);
  const isLoggedIn = useSelector(authSelectors.selectLoggedIn);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(logout());
  };
  return (
    <div className={s.user}>
      <div className={s.wrap}>
        <BsPersonCheckFill className={s.icon} />
        <h5 className={s.greeting}>
          Welcome, <span>{userName}</span>
        </h5>
      </div>

      <FormControlLabel
        className={s.switcher}
        control={
          <Switch
            color="secondary"
            checked={isLoggedIn}
            onChange={handleChange}
            aria-label="login switch"
            sx={{
              transform: "scale(0.7)",
              "@media (min-width: 768px)": {
                transform: "scale(1)",
              },
            }}
          />
        }
        label={isLoggedIn ? "Logout" : "Login"}
        sx={{
          m: "0 0 0 auto",
          width: "fit-content",
          "&:hover .MuiFormControlLabel-label": { color: "primary.light" },
          "& .MuiFormControlLabel-label": {
            fontSize: "0.6rem",

            "@media (min-width: 768px)": {
              fontSize: "1rem",
            },
          },
        }}
      />
    </div>
  );
};

export default UserMenu;
