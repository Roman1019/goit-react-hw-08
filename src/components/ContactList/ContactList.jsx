import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice.js";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={css.contactUl}>
        {contacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
