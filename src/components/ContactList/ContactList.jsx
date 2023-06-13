import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    
  };

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={styles.item}>
              <div className={styles.name}>{contact.name}</div>
              <div className={styles.number}>{contact.phone}</div>
              <button
                className={styles.btn}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default ContactList;
