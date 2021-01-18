import React from 'react';

class SearchBar extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="include-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="include-text"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="check-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input name="check-input" type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
        </label>

      </form>
    );
  }
}

export default SearchBar;
