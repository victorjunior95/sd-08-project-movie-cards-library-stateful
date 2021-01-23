import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  InputText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text_input" data-testid="text-input-label">
        Inclui o texto
        <input
          id="text_input"
          type="text"
          value={ searchText }
          data-testid="text-input"
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  InputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checked_input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="checked_input"
          type="checkbox"
          checked={ bookmarkedOnly }
          data-testid="checkbox-input"
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        { this.InputText(searchText, onSearchTextChange) }
        { this.InputCheckBox(bookmarkedOnly, onBookmarkedChange) }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
};

export default SearchBar;
