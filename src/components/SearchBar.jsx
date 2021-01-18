// implement SearchBar component here

import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto</label>
        <input id="text-input" type="text" data-testid="text-input" value={ searchText } onChange= { onSearchTextChange } />
      </form>
    )
  }
}

export default SearchBar;
