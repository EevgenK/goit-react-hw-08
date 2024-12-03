import s from "./ConfirmDelete.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentItem } from "../../redux/contacts/selectors";
import { refreshCurrentItem } from "../../redux/contacts/slice";
import { closeModal } from "../../redux/modal/slice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbOnTotalSilenceIcon from "@mui/icons-material/DoNotDisturbOnTotalSilence";
import { IconButton } from "@mui/material";

const ConfirmDelete = () => {
  const { id } = useSelector(selectCurrentItem);
  const dispatch = useDispatch();
  const onHandleConfirm = () => {
    dispatch(deleteContact(id));
    dispatch(closeModal());
  };
  const onHandleRejection = () => {
    dispatch(refreshCurrentItem());
    dispatch(closeModal());
  };
  return (
    <div className={s.delete}>
      <h5 className={s.title}>Are you sure about the deleting this contact?</h5>
      <ul className={s.list}>
        <li className={s.item}>
          <IconButton
            onClick={onHandleConfirm}
            color="secondary"
            aria-label="yes"
            size="small"
          >
            <CheckCircleIcon
              sx={{ fontSize: "50px" }}
              className={s.icon}
              color="success"
              fontSize="large"
            />
          </IconButton>
        </li>
        <li className={s.item}>
          <IconButton
            onClick={onHandleRejection}
            color="secondary"
            aria-label="yes"
            size="small"
          >
            <DoNotDisturbOnTotalSilenceIcon
              sx={{ fontSize: "50px" }}
              color="error"
              fontSize="large"
            />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default ConfirmDelete;
