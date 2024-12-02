import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/slice";

const modalRoot = document.querySelector("#modal-root");
const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const handleCloseModal = useCallback(
    ({ target, currentTarget, key }) => {
      if (target === currentTarget || key === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleCloseModal);
    return () => {
      document.removeEventListener("keydown", handleCloseModal);
      document.body.style.overflow = "auto";
    };
  }, [handleCloseModal]);

  return createPortal(
    <div className={s.overlay} onClick={handleCloseModal}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
