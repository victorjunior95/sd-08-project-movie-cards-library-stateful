import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        data-testid="text-input-label"
        htmlFor="text-input"
      >
        Inclui o texto:
        <input
          data-testid="text-input"
          id="text-input"
          onChange={ onSearchTextChange }
          type="text"
          value={ searchText }
        />
      </label>
    );
  }

  inputCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="checkbox-input"
      >
        Mostrar somente favoritos
        <input
          checked={ bookmarkedOnly }
          data-testid="checkbox-input"
          id="checkbox-input"
          onChange={ onBookmarkedChange }
          name="checkbox-input"
          type="checkbox"
        />
      </label>
    );
  }

  render() {
    return (
      <form
        data-testid="search-bar-form"
      >
        { this.inputText() }
        { this.inputCheckbox() }
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
