import css from "./HomePage.module.css";
import { MdContactPhone } from "react-icons/md";
export default function HomePage() {
  return (
    <div className={css.divHeadIcon}>
      <h2 className={css.head}>Welcome to the phonebook app.</h2>
      <MdContactPhone size={80} />
    </div>
  );
}
