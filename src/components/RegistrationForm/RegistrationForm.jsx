import { Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";

export default function RegistrationForm() {
  const idName = useId();
  const idEmail = useId();
  const idPassword = useId();
  const dispatch = useDispatch();

  const handleSumbit = (values, actions) => {
    console.log(values);
    console.log(actions);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSumbit}
    >
      <Form className={css.form}>
        <div className={css.formNameDiv}>
          <label className={css.label} htmlFor={idName}>
            Username
          </label>
          <Field type="text" name="name" id={idName} />
        </div>
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
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
}
