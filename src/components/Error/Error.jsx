import css from "./Error.module.css";

export default function Error() {
  return (
    <p className={css.text}>
      <b>Something wrong.Please reload...</b>
    </p>
  );
}
