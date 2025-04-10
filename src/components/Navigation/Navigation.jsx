import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation({ getLinkStyle }) {
  return (
    <nav className={css.nav}>
      <div className={css.list}>
        <NavLink className={getLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink className={getLinkStyle} to="/contacts">
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}
