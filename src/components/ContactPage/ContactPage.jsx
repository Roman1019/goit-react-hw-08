import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import Error from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";
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
