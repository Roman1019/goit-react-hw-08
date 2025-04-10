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

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="section">
      <h1 className={css.head}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
