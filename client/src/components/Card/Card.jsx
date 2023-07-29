import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFav,
  removeFav,
  allCharacters,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    let character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
    };

    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

  useEffect(() => {
    allCharacters?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <div className={styles.tarjeta}>
      <div className={styles.botones}>
        {isFav ? (
          <button className={styles.boton2} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.boton2} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={styles.boton} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <img className={styles.image} src={image} alt="img-card" />
      <Link to={`/detail/${id}`}>
        <h3 className={styles.name}> {name} </h3>
      </Link>
      <div>
        <div className={styles.text}>
          <div>
            <h3>STATUS: {status}</h3>
            <h3>SPECIES: {species}</h3>
            <h3>GENDER: {gender}</h3>
            <h3>ORIGIN: {origin}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
