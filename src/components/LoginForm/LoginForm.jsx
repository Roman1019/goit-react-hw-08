import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
// import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const idEmail = useId();
  const idPassword = useId();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSumbit = (values, actions) => {
    dispatch(logIn(values));
    // .unwrap()
    // .then(() => {
    //   navigate("/contacts");
    // })
    // .catch();
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
