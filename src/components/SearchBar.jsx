import React, { Component } from 'react';

class SearchBar extends Component {
  searchBarForm(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  checkboxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          type="checkbox"
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  selectInput(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.searchBarForm(searchText, onSearchTextChange)}
        {this.checkboxInput(bookmarkedOnly, onBookmarkedChange)}
        {this.selectInput(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
