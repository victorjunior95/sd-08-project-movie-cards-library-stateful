import React from 'react';
// import propTypes from 'propTypes';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <MovieList />
        <AddMovie onClick={ () => console.log('teste') } />
      </main>
    );
  }
}

// propTypes {}

export default MovieLibrary;
