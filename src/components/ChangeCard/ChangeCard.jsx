import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import s from "./ChangeCard.module.css";
import { selectCurrentItem } from "../../redux/contacts/selectors";
import { Button } from "@mui/material";
import { closeModal } from "../../redux/modal/slice";
import { refreshCurrentItem } from "../../redux/contacts/slice";

import CancelIcon from "@mui/icons-material/Cancel";

const ChangeCard = () => {
  const changeItem = useSelector(selectCurrentItem);
  const dispatch = useDispatch();
  const onHandleClose = () => {
    dispatch(refreshCurrentItem());
    dispatch(closeModal());
  };

  return (
    <div className={s.change}>
      <h4 className={s.title}>Edit if have to</h4>
      <ContactForm type="edit" change={changeItem} />
      <Button
        className={s.button}
        startIcon={<CancelIcon fontSize="large" />}
        type="submit"
        variant="outlined"
        color="secondary"
        onClick={onHandleClose}
      >
        change mind
      </Button>
    </div>
  );
};

export default ChangeCard;
