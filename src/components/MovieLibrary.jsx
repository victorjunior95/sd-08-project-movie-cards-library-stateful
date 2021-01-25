import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    // const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    return (
      <div>
        <AddMovie />
        <SearchBar />
      </div>
    );
  }
}

MovieLibrary.propType = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
