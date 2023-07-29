import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('');

   function handleChange (event) {
      setId(event.target.value);
   }

   return (
      <div className={styles.container}>
         <input 
            className={styles.input} 
            type='search' 
            value={id}
            onChange={handleChange}
         />
         <button className={styles.button} onClick={() => onSearch(id)}>SEARCH</button>
      </div>
   );
}
