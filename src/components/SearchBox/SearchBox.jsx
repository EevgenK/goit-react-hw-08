import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchFieldId = useId();

  const handleInput = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <label className={s.label} htmlFor={searchFieldId}>
      Find contacts by name or number
      <input
        id={searchFieldId}
        value={search}
        onChange={handleInput}
        className={s.search}
      ></input>
    </label>
  );
};

export default SearchBox;
