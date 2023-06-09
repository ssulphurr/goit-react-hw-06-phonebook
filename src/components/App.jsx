import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
