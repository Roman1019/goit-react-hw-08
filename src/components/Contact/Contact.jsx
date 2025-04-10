import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div>
        <div className={css.contactHeadDiv}>
          <div className={css.contactHeadIconDiv}>
            <FaUser />
          </div>

          <h3 className={css.contactHead}>{contact.name}</h3>
        </div>
        <div className={css.contactParDiv}>
          <div className={css.contactHeadIconDiv}>
            <FaPhoneAlt />
          </div>
          <p className={css.contactPar}>{contact.number}</p>
        </div>
      </div>
      <div className={css.contactButtonDiv}>
        <button
          className={css.contactButton}
          onClick={handleDelete}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}
