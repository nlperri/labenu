import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = ({
  name,
  type,
  evolved,
  weight,
  color,
  image,
  setPokemon,
  evolvedPokemon,
}) => {
  const evoluirPokemon = () => {
    evolved ? alert("Pokémon evoluido") : setPokemon(evolvedPokemon);
  };

  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
