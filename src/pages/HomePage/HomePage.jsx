import { Box } from "@mui/material";
import s from "./HomePage.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaSmileWink } from "react-icons/fa";
import BenefitsList from "../../components/BenefitsList/BenefitsList";
import { benefits } from "./benefits";

const HomePage = () => {
  return (
    <Box
      className={s.back}
      component="section"
      sx={{
        width: "100vw",
        height: "100vh",
        p: 2,
        border: "1px dashed grey",
        backgroundColor: "var(--main--bg-color)",
      }}
    >
      <div className={clsx("container", s.home)}>
        <div className={s.introduce}>
          <h1 className={s.title}>Phone book organizer</h1>
          <p>
            This is an organizer for phone numbers. Access for only registered
            customers. So visit the{" "}
            <Link className={s.link} to="/register">
              {" "}
              Register page
            </Link>{" "}
            first. And get all functions provided by the application.
          </p>
          <BenefitsList title="This application provides:" items={benefits} />
          <p>
            In the nearest future this app is expected to provide more
            functions. <FaSmileWink />
          </p>
          <p>Enjoy by using this app and have a nice day! </p>
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
