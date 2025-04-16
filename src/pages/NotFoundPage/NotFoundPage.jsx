import { Link } from "react-router";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div className={css.text}>
      Not Found Page! Please folow this <Link to="/">link</Link>
    </div>
  );
}
