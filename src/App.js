import React from 'react';

import './App.css';

import movies from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
