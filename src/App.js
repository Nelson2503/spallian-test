import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {PokemonList} from './components/PokemonList'
import {PokemonDetails} from './components/PokemonDetails';
import { Header } from './shared/Header';
import { Footer } from './shared/Footer';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
  }
  
  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch}/>
        <hr />
        <Routes>
          <Route path="/" element={<PokemonList searchTerm={searchTerm} />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
        <hr />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
