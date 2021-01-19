import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
// import movies from './data';

import Header from './components/Header';
import AddMovie from './components/AddMovie';

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
      <AddMovie onClick={ callback } />
    </div>
  );
}

export default App;
