// implement SearchBar component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          id="text-input"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="check-box" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="check-box"
          type="checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        { this.renderTextInput() }
        { this.renderCheckBox() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
