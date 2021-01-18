import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
// import movies from './data';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        earchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
    </div>
  );
}

export default App;
