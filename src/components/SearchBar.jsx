// implement SearchBar component here

import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto</label>
        <input id="text-input" type="text" data-testid="text-input" value={ searchText } onChange= { onSearchTextChange } />
        <label htmlFor="check-box" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input id="check-box" type="checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange = { onBookmarkedChange } />
      </form>
    )
  }
}

export default SearchBar;
