import { RxHamburgerMenu, RxBorderSolid } from "react-icons/rx";
import s from "./BurgerBtn.module.css";
import { useState } from "react";

const BurgerBtn = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    onClick();
    setIsHovered(false);
  };
  return (
    <button
      onClick={handleClick}
      className={s.burgerBtn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <RxBorderSolid className={s.svg} />
      ) : (
        <RxHamburgerMenu className={s.svg} />
      )}
    </button>
  );
};

export default BurgerBtn;
