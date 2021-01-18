import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=''
          onSearchTextChange=''
          bookmarkedOnly=''
          onBookmarkedChange=''
          selectedGenre=''
          onSelectedGenreChange=''
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {

// }

export default MovieLibrary;

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback
