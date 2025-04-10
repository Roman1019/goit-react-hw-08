import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import clsx from "clsx";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation getLinkStyle={getLinkStyle} />
      <AuthNav getLinkStyle={getLinkStyle} />
    </header>
  );
}
