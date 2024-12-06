import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useEffect } from "react";

export const useResetForm = (ref) => {
  const { name } = useSelector(selectUser);
  useEffect(() => {
    if (name) {
      ref.current.resetForm();
    }
  }, [ref, name]);
};
