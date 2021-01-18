// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange, searchText } = this.props;

    return (

      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input type="text" name="searchText" id="searchText" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          </label>
        </div>

        <div>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input type="checkbox" name="checkbox-input" id="checkbox-input" onChange={ onBookmarkedChange } data-testid="checkbox-input" checked={ bookmarkedOnly } />
          </label>
        </div>

      </form>
    );
  }
}
SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
