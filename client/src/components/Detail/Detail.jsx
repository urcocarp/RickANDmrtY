import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((error) => window.alert(error.response.data.error));

    return setCharacter({});
  }, [id]);

  /* 
  useEffect(() => {
    try {
      const info = async () => {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      }
  
      info();
      
    } catch (error) {
      window.alert(error.message)
    }
  })
  */

  return (
    <div className={styles.container}>
      <div className={styles.personcontainer}>
        <h1>{character.name}</h1>
        <img
          className={styles.imagen}
          src={character.image}
          alt={`${character.name}`}
        />
      </div>
      {character.name && (
        <div className={styles.info}>
          <h2>STATUS: {character.status}</h2>
          <h2>SPECIES: {character.species}</h2>
          <h2>GENDER: {character.gender}</h2>
          <h2>ORIGIN: {character.origin}</h2>
        </div>
      )}
    </div>
  );
}
