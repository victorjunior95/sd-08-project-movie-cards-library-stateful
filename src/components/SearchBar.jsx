import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="search"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            id="search"
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          htmlFor="bookmarked"
          data-testid="checkbox-input-label"
        >
          <input
            id="bookmarked"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        <label
          htmlFor="select-input"
          data-testid="select-input-label"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <select
            data-testid="select-input"
            value={ selectedGenre }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
          Filtrar por gênero
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
