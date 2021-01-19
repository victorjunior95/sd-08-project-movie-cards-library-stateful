import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <SearchBar />
    </div>
  );
}

export default App;
