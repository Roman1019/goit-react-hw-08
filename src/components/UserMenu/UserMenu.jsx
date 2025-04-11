import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button">Log out</button>
    </div>
  );
}
