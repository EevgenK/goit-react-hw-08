import { FaEdit, FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { MdDeleteForever } from "react-icons/md";
import { setCurrentItem } from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";
const Contact = ({ contacts: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(setCurrentItem({ type: "delete", id, name, number }));
    dispatch(openModal());
  };
  const handleEdit = () => {
    dispatch(setCurrentItem({ type: "edit", id, name, number }));
    dispatch(openModal());
  };
  return (
    <li className={s.item}>
      <div className={s.card}>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {name}
        </p>
        <a className={s.link} href={`tel:${number}`}>
          <p className={s.number}>
            <BsFillTelephoneFill className={s.icon} />

            {number}
          </p>
        </a>
      </div>
      <div className={s.buttons}>
        <button className={s.edit} type="button" onClick={handleEdit}>
          <span className={s.tooltiptext}>Click to edit contact</span>
          <FaEdit />
        </button>
        <button type="button" onClick={handleDelete} className={s.delete}>
          <span className={s.tooltiptext}>Click to delete contact</span>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default Contact;
