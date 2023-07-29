import Card from "../Card/Card";
import styled from "styled-components";

const CardsStyle = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: space-evenly;
  padding: 5px;
  width: 100%;
  margin: auto;
  height: 110vh;
`;

export default function Cards({ characters, onClose }) {
  return (
    <CardsStyle>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </CardsStyle>
  );
}
