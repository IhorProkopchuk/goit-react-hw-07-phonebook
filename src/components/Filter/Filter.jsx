import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
    
  };

  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
