import React from 'react';
import './App.css';
import data from './data';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
