import React from 'react';

class SearchBar extends React.components {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" />
        <input
          data-testid="text-input"
          type="text"
          value={searchText.props}
          onChange={onSearchTextChange}
        />
        <label data-testid="checkbox-input-label" >
          Mostrar somente favoritos
        </label>
        <input type="checkbox" checked={bookmarkedOnly.props} onChange={onBookmarkedChange} />
        <select>Genre</select>
      </form>
    );
  }
}

export default SearchBar;

