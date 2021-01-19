import React from 'react';

class SearchBar extends React.Component {
  renderCheckox() {
    const { bookmarkedOnly, onBookmarkChange } = this.props;
    return (
      <label htmlFor="Alguma" data-testid="checkbox-input-label">
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkChange }
          data-testid="checkbox-input-label"
        />
        Mostrar somente favoritos
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            id="teste"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        {this.renderCheckox()}
      </form>
    );
  }
}
export default SearchBar;
