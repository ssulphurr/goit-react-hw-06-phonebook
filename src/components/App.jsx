import { useEffect } from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />

        {visibleContacts && <ContactList contacts={visibleContacts} />}
      </Section>
    </>
  );
}
