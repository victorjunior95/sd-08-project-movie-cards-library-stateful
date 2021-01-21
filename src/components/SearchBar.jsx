import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  onSearch(onSearchTextChange, searchText) {
    return (
      <label id="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  onBookMark(onBookmarkedChange, bookmarkedOnly) {
    return (
      <label id="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          id="checkbox-input"
          type="checkbox"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
        />
      </label>
    );
  }

  select(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="genre"
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
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form id="search-bar-form">
        { this.onSearch(onSearchTextChange, searchText) }
        { this.onBookMark(onBookmarkedChange, bookmarkedOnly) }
        { this.select(selectedGenre, onSelectedGenreChange) }
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
