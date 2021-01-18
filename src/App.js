import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function a() {
  return console.log('ronaldo');
}

function onClick(addMovieThis) {
  return () => addMovieThis.setState({
    subtitle: '',
    title: '',
    imagePath: '',
    storyLine: '',
    rating: 0,
    genre: 'action',
  });
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
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;
