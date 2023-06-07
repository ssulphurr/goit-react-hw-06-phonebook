import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const match = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLocaleLowerCase() ||
        contact.number === number
    );

    if (match) {
      alert(`${name} or ${number} is already in contacts`);
      return;
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter />

        {visibleContacts && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        )}
      </Section>
    </>
  );
}
