import { IoArrowUpCircle } from "react-icons/io5";
import s from "./ArrowButton.module.css";

const ArrowButton = () => {
  return (
    <button className={s.up}>
      <a href="#">
        <IoArrowUpCircle className={s.icon} />
      </a>
    </button>
  );
};

export default ArrowButton;
