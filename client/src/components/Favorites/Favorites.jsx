import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import styled from 'styled-components';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

export const FavoriteStyle = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: space-evenly;
  padding: 5px;
  width: 100%;
  margin: auto;
  height: 110vh;
`;

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <FavoriteStyle>
        {myFavorites?.map((fav) => (
          <Card
            id={fav.id}
            key={fav.id}
            name={fav.name}
            species={fav.species}
            status={fav.status}
            origin={fav.origin}
            gender={fav.gender}
            image={fav.image}
          />
        ))}
      </FavoriteStyle>
    </div>
  );
};

export default Favorites;
