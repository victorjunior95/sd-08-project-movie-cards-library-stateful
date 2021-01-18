// implement MovieLibrary component here
// mais um comentario aqui pra lanxar minha beforeEachUnitTest

import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library</h2>
        <SearchBar />
        <MovieList movies={ this.movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
