// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input-id">
          Inclui o texto
          <input type="text" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
