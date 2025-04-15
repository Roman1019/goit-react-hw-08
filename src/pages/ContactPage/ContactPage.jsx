import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import Error from "../../components/Error/Error.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./ContactPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contacts/selectors.js";

import { useEffect } from "react";

export default function ContactPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={css.head}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
