import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import dataMovies from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ dataMovies } />
    </div>
  );
}

export default App;
