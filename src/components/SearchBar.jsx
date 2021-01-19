// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  testeFunction(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label">
        Inclui o texto:
        <input onChange={onSearchTextChange} value={searchText} data-testid="text-input"
          type="text"
        />
      </label>
    );
  }
  render() {
    const { 
      searchText, 
      onSearchTextChange, 
      bookmarkedOnly, 
      onBookmarkedChange,
      selectedGenre, 
      onSelectedGenreChange, 
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.testeFunction(searchText, onSearchTextChange)}
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input data-testid="checkbox-input" onChange={onBookmarkedChange} checked={bookmarkedOnly} type="checkbox" />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
