import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar search={ movies } />
    </div>
  );
}

export default App;
