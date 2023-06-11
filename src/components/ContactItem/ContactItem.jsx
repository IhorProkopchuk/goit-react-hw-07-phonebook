import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <li className={styles.list}>
        <div className={styles.name}>{contact.name}</div>
        <div className={styles.number}>{contact.number}</div>
        <button
          className={styles.btn}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
