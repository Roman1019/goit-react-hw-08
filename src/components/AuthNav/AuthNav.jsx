import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav({ getLinkStyle }) {
  return (
    <nav className={css.nav}>
      <div className={css.list}>
        <NavLink className={getLinkStyle} to="/register">
          Register
        </NavLink>
        <NavLink className={getLinkStyle} to="/login">
          Log in
        </NavLink>
      </div>
    </nav>
  );
}
