import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import { useCallback, useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");
const Modal = ({ children, close }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, key }) => {
      if (target === currentTarget || key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeModal);
    return () => {
      document.removeEventListener("keydown", closeModal);
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);

  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
