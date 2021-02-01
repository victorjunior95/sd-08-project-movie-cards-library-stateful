import React from 'react';

import './App.css';

import movies from './data';

import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
