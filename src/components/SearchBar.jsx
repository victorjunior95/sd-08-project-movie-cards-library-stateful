/* eslint-disable jsx-a11y/label-has-associated-control */
// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
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
        <label data-testid="text-input-label">
          Inclui o texto
          <input data-testid="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" name="select" value={ selectedGenre } onChange={ onSelectedGenreChange }>
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
