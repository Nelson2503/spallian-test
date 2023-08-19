import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/pokemonDetails.css"

export const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      })
      .catch(error => {
        console.error('Error fetching Pokémon details:', error);
      });
  }, [name]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const types = pokemonData.types.map(type => type.type.name).join(', ');
  const capitalizedPokemonName = pokemonData.name.toUpperCase();

  return (
    <div className='poke_detail'>
      <h2 className='poke_name'>{capitalizedPokemonName}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p className='poke_type'>Types: {types}</p>
    </div>
  );
};

