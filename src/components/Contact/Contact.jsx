import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import s from "./Contact.module.css";
import { MdDeleteForever } from "react-icons/md";
const Contact = ({ contacts: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.card}>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {name}
        </p>

        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.btn}>
        <span className={s.tooltiptext}>Click to delete contact</span>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default Contact;
