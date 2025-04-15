import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation({ getLinkStyle }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <div className={css.list}>
        <NavLink className={getLinkStyle} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={getLinkStyle} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}
