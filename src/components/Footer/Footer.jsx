import s from "./Footer.module.css";
import { IoArrowUpCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import CabinIcon from "@mui/icons-material/Cabin";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={clsx("container", s.wrap)}>
        <NavLink className={s.link} to="/">
          <CabinIcon fontSize="large" color="secondary" />
        </NavLink>
        <p className={s.author}>
          &copy; PHONE BOOK made by Kulbachenko Evgen on REACT
        </p>
        <a className={s.up} href="#">
          <IoArrowUpCircle className={s.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
