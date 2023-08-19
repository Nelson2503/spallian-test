import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/pokemonList.css';

export function PokemonList({searchTerm}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    fetchPokemonList();
  }, [currentPage, searchTerm]);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage-1)*30}&limit=30`);
      setPokemonList(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 30));
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  const goToPage = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  return (
    <div className="pokemon-list">
      <h2>Pokémon List</h2>
      <div className="pokemon-card-list">
        {pokemonList.map(pokemon => {
          if (!searchTerm || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name} className="pokemon-link">
            <div className="pokemon-card">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <p className="pokemon-name">{pokemon.name}</p>           
            </div>
          </Link>
        )}})}
      </div>
      <div className='pagination'>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
         Next 
        </button>
      </div>
    </div>
  );
}