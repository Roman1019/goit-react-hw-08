import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./LoginPage.module.css";

export default function LoginForm() {
  const idEmail = useId();
  const idPassword = useId();
  return (
    <Formik>
      <Form className={css.form}>
        <div className={css.formNameDiv}>
          <label className={css.label} htmlFor={idEmail}>
            Email
          </label>
          <Field type="email" name="email" id={idEmail} />
        </div>
        <div className={css.formNameDiv}>
          <label className={css.label} htmlFor={idPassword}>
            Passsword
          </label>
          <Field type="password" name="password" id={idPassword} />
        </div>
        <div className={css.buttonDiv}>
          <button className={css.button} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}
