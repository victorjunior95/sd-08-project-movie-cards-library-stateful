import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
