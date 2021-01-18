import React from 'react';
import './App.css';

import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

import movies from './data';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
