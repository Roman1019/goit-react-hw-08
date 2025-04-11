import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const idEmail = useId();
  const idPassword = useId();
  const dispatch = useDispatch();

  const handleSumbit = (values, actions) => {
    console.log(values);
    console.log(actions);
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSumbit}
    >
      <Form className={css.form}>
        <div className={css.formNameDiv}>
          <label className={css.label} htmlFor={idEmail}>
            Email
          </label>
          <Field type="email" name="email" id={idEmail} />
        </div>
        <div className={css.formNameDiv}>
          <label className={css.label} htmlFor={idPassword}>
            Password
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
