// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    //   Desestruturando as props
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    // Retornando o form com os elementos
    return (
      <form className="search-bar" data-testid="search-bar-form">
        { /* Retornando o input text para a busca */ }
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input
            data-testid="text-input"
            id="text-input"
            type="search"
            name="search"
            value={ searchText }
            onChange={ onSearchTextChange }
            placeholder="Pesquisar..."
          />
        </label>
        { /* Retornando o checkbox para escolher somente os favoritos */ }
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            type="checkbox"
            value=""
            id="text-input"
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            name="bookmark"
            checked={ bookmarkedOnly }
          />
        </label>
        { /* Retornando o select para escolher o gênero */ }
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            name="genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            id="select-input"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
