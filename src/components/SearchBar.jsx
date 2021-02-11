import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderBookmarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderSelectGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        { this.renderBookmarked() }
        { this.renderSelectGenre() }
      </form>
    );
  }
}
// Usei a dica do Paulo Simões de dividir o render, por ser uma solução mais simples do que criar novos componentes. https://forum.betrybe.com/t/projeto-movie-cards-library-stateful-metodo-render-com-muitas-linhas/468/3

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: false,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: '',
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
