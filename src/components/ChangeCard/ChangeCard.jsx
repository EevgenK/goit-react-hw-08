import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import s from "./ChangeCard.module.css";
import { selectCurrentItem } from "../../redux/contacts/selectors";
import { Button } from "@mui/material";
import { closeModal } from "../../redux/modal/slice";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CancelIcon from "@mui/icons-material/Cancel";

const ChangeCard = () => {
  const changeItem = useSelector(selectCurrentItem);
  const dispatch = useDispatch();

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
        onClick={() => dispatch(closeModal())}
      >
        change mind
      </Button>
    </div>
  );
};

export default ChangeCard;
