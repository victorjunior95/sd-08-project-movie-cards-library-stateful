import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
