import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import { selectIsLoggerIn } from "../../redux/auth/selectors.js";
import clsx from "clsx";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggerIn);
  return (
    <header className={css.header}>
      <Navigation getLinkStyle={getLinkStyle} />
      {isLoggedIn ? <UserMenu /> : <AuthNav getLinkStyle={getLinkStyle} />}
    </header>
  );
}
