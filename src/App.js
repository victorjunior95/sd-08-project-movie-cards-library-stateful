import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieCardList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCardList movies={ movies } />
    </div>
  );
}

export default App;
