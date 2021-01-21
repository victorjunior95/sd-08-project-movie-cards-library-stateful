import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  onSearch(param1, param2) {
    return (
      <label id="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input id="text-input" type="text" onChange={ param1 } />
        { param2 }
      </label>
    );
  }

  onBookMark(param1, param2) {
    return (
      <label id="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          id="checkbox-input"
          type="checkbox"
          onChange={ param1 }
          checked={ param2 }
        />
      </label>
    );
  }

  select(param1, param2) {
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select name="" data-testid="select-input" value={ param1 } onChange={ param2 }>
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { search } = this.props;
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = search;
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
  search: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchBar;
