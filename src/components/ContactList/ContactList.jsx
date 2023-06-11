import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    return filteredContacts;
  };

  
  return (
    <ul>
      {filterContacts().map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
