import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";
// import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/,
      "The name must contain only letters"
    )
    .min(3, "Too short")
    .max(50)
    .required("Name equired"),
  email: Yup.string()
    .min(3, "Too short")
    .max(50)
    .email("Incorrect email")
    .required("Email required"),
  password: Yup.string()
    .min(5, "Too short")
    .max(50)
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .required("Pasword required"),
});

export default function RegistrationForm() {
  const idName = useId();
  const idEmail = useId();
  const idPassword = useId();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSumbit = (values, actions) => {
    // console.log(values);
    // console.log(actions.setErrors());
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log("fulfielld", actions);
      })
      .catch((error) => {
        console.log("rejected:", error);
        if (error === "Request failed with status code 400") {
          toast.error("This email is already registered, try another one");
        }
      });
    actions.resetForm();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSumbit}
        validationSchema={UserSchema}
      >
        <Form className={css.form}>
          <div className={css.formNameDiv}>
            <label className={css.label} htmlFor={idName}>
              Username
            </label>
            <Field type="text" name="name" id={idName} />
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>
          <div className={css.formNameDiv}>
            <label className={css.label} htmlFor={idEmail}>
              Email
            </label>
            <Field type="email" name="email" id={idEmail} />
            <ErrorMessage className={css.error} component="span" name="email" />
          </div>
          <div className={css.formNameDiv}>
            <label className={css.label} htmlFor={idPassword}>
              Passsword
            </label>
            <Field type="password" name="password" id={idPassword} />
            <ErrorMessage
              className={css.error}
              component="span"
              name="password"
            />
          </div>
          <div className={css.buttonDiv}>
            <button className={css.button} type="submit">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
// ann123@ukr.net
// 123123Q
