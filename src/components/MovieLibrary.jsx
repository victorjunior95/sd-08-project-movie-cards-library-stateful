import React, { Component } from 'react';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <AddMovie onClick={ () => console.log('Clique') } />
        <SearchBar />
        {/* <MovieList /> */}
      </div>
    );
  }
}

export default MovieLibrary;
