import { MdGppGood } from "react-icons/md";
import s from "./BenefitsList.module.css";
import { nanoid } from "@reduxjs/toolkit";

const BenefitsList = ({ title, items }) => {
  const benefits = items.map((item) => {
    return (
      <li key={nanoid()} className={s.item}>
        <MdGppGood className={s.icon} />
        <p>{item}</p>
      </li>
    );
  });
  return (
    <div className={s.wrap}>
      <h5 className={s.benefits}>{title}</h5>
      <ul className={s.list}>{benefits}</ul>
    </div>
  );
};

export default BenefitsList;
