import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { addContact, deleteContact} from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';
import { visibleContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(visibleContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContactList = JSON.parse(localStorage.getItem('contacts'));
    if (savedContactList) {
      dispatch(addContact(savedContactList));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleCreateContacts = (currentValue) => {
    const alreadyContacts = contacts.some(obj => obj.name === currentValue.name);
    if (alreadyContacts) {
      alert(`${currentValue.name} is already in contacts`);
    } else {
      dispatch(addContact({
        name: currentValue.name,
        id: nanoid(),
        number: currentValue.number,
      }));
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilters = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={handleCreateContacts} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilters} />
        <ContactsList contacts={filteredContacts} onDelete={handleDeleteContact} />
      </Section>
    </Container>
  );
};
