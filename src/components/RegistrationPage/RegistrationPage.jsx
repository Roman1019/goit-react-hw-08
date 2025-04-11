import RegistrationForm from "../RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div>
      <h2 className={css.head}>Register your account</h2>
      <RegistrationForm />
    </div>
  );
}
