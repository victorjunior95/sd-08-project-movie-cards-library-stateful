import React, { Component } from 'react';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <AddMovie onClick={ () => console.log('Clique') } />
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
