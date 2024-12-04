import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/selectors";
import { useEffect } from "react";

export const useResetForm = (ref) => {
  const userName = useSelector(authSelectors.selectUserName);
  useEffect(() => {
    if (userName) {
      console.log("effect from login");
      ref.current.resetForm();
    }
  }, [ref, userName]);
};
