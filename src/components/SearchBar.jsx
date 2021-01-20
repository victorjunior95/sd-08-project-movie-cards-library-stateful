/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <label data-testid="search-bar-form" htmlFor="text-input">
        Nome:
        <input type="text" name="name" />
      </label>
    );
  }
}

SearchBar.propTypes = {
  movies: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchBar;
