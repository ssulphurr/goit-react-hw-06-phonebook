import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li>
      <div className={css.contact__item}>
        {name}: {number}
        <button
          className={css.btn__delete}
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
