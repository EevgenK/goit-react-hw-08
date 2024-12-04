import { Link } from "react-router-dom";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import s from "./NotFoundPage.module.css";
import { Box } from "@mui/material";
const NotFoundPage = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        height: "100vh",
        p: 2,

        backgroundColor: "var(--main--bg-color)",
      }}
    >
      <div className="container">
        <div className={s.notfound}>
          <h1>Page not found</h1>
          <div className={s.wrap}>
            <DoNotDisturbIcon color="secondary" fontSize="large" />
            <h3>404 Error</h3>
          </div>
          <p>
            Sorry, the page you are looking for could not be found or has been
            removed. You can click on the link below, it will move you on the
            main page of app.
          </p>

          <Link to="/" className={s.link}>
            Go home
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default NotFoundPage;
