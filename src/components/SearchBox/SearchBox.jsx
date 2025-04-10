import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice.js";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters.name);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const idFind = useId();
  return (
    <div className={css.searchDiv}>
      <label className={css.label} htmlFor={idFind}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filters}
        onChange={handleSearch}
        id={idFind}
      />
    </div>
  );
}
