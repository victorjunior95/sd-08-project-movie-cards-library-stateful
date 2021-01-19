// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterMovieText from './searchMovies/FilterMovieText';
import CheckMovieFavorite from './searchMovies/CheckMovieFavorite';
import FilterMovieGender from './searchMovies/FilterMovieGender';

class SearchBar extends Component {
  render() {
    const { bookmarkedOnly, searchText, selectedGenre,
      onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form action="#" method="GET" data-testid="search-bar-form">
        <FilterMovieText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <CheckMovieFavorite
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <FilterMovieGender
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
