import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

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

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
