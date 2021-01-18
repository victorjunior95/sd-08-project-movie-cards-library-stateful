import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderInputText() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <input
        id="text-input-label"
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
        data-testid="text-input"
      />
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label">
          Inclui o texto:
          { this.renderInputText() }
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
