import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <SearchBar />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
