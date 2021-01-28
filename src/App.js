import React from 'react';
import './App.css';

import data from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
