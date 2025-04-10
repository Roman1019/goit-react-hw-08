import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contactsSlice.js";
import Error from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";
import Layout from "../Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import RegistrationForm from "../RegistrationForm/RegistrationForm.jsx";
import LoginPage from "../LoginPage/LoginPage.jsx";

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/contacts"
          element={
            <>
              <h1 className={css.head}>Phonebook</h1>
              <ContactForm />
              <SearchBox />
              {isLoading && <Loader />}
              {isError && <Error />}
              {contacts.length > 0 && <ContactList />}
            </>
          }
        />
      </Routes>
    </Layout>
  );
}

{
  /* <h1 className={css.head}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      {contacts.length > 0 && <ContactList />} */
}
