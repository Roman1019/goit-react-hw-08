import css from "./LoginPage.module.css";

import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <h2 className={css.head}>Please log in</h2>
      <LoginForm />
    </div>
  );
}
