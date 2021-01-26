// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  addTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="addText">
        Inclui o texto
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          id="addText"
        />
      </label>
    );
  }

  showFavoredInput() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favored">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          id="favored"
        />
      </label>
    );
  }

  filteredInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        data-testid="select-input-label"
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
        htmlFor="filtered"
      >
        Filtrar por gênero
        <select value={ selectedGenre } data-testid="select-input" id="filtered">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        { this.addTextInput() }
        { this.showFavoredInput() }
        { this.filteredInput() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
