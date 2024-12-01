import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";
import authSelectors from "../../redux/auth/selectors";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    // <header>
    //   <Box sx={{ flexGrow: 1 }}>
    //     <AppBar position="static">
    //       <Toolbar>
    //         <IconButton
    //           size="large"
    //           edge="start"
    //           color="inherit"
    //           aria-label="menu"
    //           sx={{ mr: 2 }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           <nav className={s.header}>
    //             <Navigation />
    //             {isLoggedIn ? <UserMenu /> : <AuthNav />}
    //           </nav>
    //         </Typography>
    //         <Button color="inherit">Login</Button>
    //       </Toolbar>
    //     </AppBar>
    //   </Box>
    // </header>
    <header>
      <nav className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
