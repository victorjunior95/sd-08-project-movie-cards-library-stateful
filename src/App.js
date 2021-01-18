import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

function a() {
  return console.log('ronaldo');
}
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="Procurar"
        onSearchTextChange={ a }
        bookmarkedOnly
        onBookmarkedChange={ a }
        selectedGenre="Comédia"
        onSelectedGenreChange={ a }
      />
    </div>
  );
}

export default App;
