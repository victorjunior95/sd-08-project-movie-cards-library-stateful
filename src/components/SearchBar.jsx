/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input 
            data-testid="text-input"
            type="text"
            name="name" 
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="text-input">
          Mostrar somente favoritos
          <input type="checkbox" data-testid="checkbox-input" />
        </label>

        <label 
          data-testid="select-input-label" 
          htmlFor="text-input"
        >                                                              
          Filtrar por gênero
          <select data-testid="select-input">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" selected value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  movies: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchBar;
