import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ul className={css.contact__list}>
        {visibleContacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
