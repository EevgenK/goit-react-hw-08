import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { BsPersonCheckFill } from "react-icons/bs";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { FormControlLabel, Switch } from "@mui/material";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(logout());
  };
  return (
    <div className={s.user}>
      <div className={s.wrap}>
        <BsPersonCheckFill className={s.icon} />
        <h5 className={s.greeting}>
          Welcome, <span>{name}</span>
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
