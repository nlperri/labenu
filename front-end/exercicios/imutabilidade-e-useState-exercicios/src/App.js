import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 200px;
  }
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/f/f3/0172Pichu.png/375px-0172Pichu.png",
    id: 0,
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8.5,
    color: "orange",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/375px-0004Charmander.png",
    id: 1,
  });

  const [pokemon3, setPokemon3] = useState({
    name: "Bulbasaur",
    type: "Grass",
    evolved: false,
    weight: 7,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/375px-0001Bulbasaur.png",
    id: 2,
  });

  const [pokemon4, setPokemon4] = useState({
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9,
    color: "blue",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png",
    id: 3,
  });

  const evolvedPokemon1 = {
    ...pokemon,
    name: "Pikachu",
    evolved: true,
    weight: 6,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/375px-0025Pikachu.png",
    id: 4,
  };

  const evolvedPokemon2 = {
    ...pokemon2,
    name: "Charmeleon",
    evolved: true,
    weight: 19,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/375px-0005Charmeleon.png",
    id: 5,
  };

  const evolvedPokemon3 = {
    ...pokemon3,
    name: "Ivysaur",
    evolved: true,
    weight: 13,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/375px-0002Ivysaur.png",
    id: 6,
  };

  const evolvedPokemon4 = {
    ...pokemon4,
    name: "Wartortle",
    evolved: true,
    weight: 22.5,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/375px-0008Wartortle.png",
    id: 7,
  };

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard
          name={pokemon.name}
          type={pokemon.type}
          evolved={pokemon.evolved}
          weight={pokemon.weight}
          color={pokemon.color}
          image={pokemon.image}
          setPokemon={setPokemon}
          evolvedPokemon={evolvedPokemon1}
        />
        <PokemonCard
          name={pokemon2.name}
          type={pokemon2.type}
          evolved={pokemon2.evolved}
          weight={pokemon2.weight}
          color={pokemon2.color}
          image={pokemon2.image}
          setPokemon={setPokemon2}
          evolvedPokemon={evolvedPokemon2}
        />
        <PokemonCard
          name={pokemon3.name}
          type={pokemon3.type}
          evolved={pokemon3.evolved}
          weight={pokemon3.weight}
          color={pokemon3.color}
          image={pokemon3.image}
          setPokemon={setPokemon3}
          evolvedPokemon={evolvedPokemon3}
        />
        <PokemonCard
          name={pokemon4.name}
          type={pokemon4.type}
          evolved={pokemon4.evolved}
          weight={pokemon4.weight}
          color={pokemon4.color}
          image={pokemon4.image}
          setPokemon={setPokemon4}
          evolvedPokemon={evolvedPokemon4}
        />
      </FlexContainer>
    </>
  );
}

export default App;
