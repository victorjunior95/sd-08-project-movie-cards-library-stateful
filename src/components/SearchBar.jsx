import React from 'react';

class SearchBar extends React.Component {
  textInput(searchText, onSearchTextChange) {
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

  checkBoxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
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
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.textInput(searchText, onSearchTextChange)}
        {this.checkBoxInput(bookmarkedOnly, onBookmarkedChange)}
        {this.selectInput(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
