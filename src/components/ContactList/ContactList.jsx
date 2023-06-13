import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
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
      )}
    </div>
  );
};

export default ContactList;
