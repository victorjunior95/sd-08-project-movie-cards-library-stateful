import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
      dsddsd
    return (
      <div data-testid="movie-list" className="movie-list">
        <input type="text" onChange={ this.handleChange } />
        {searchText}
        {onSearchTextChange}
        {bookmarkedOnly}
        {onBookmarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
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
