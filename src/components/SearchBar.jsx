import React from 'react';
// import PropTypes from 'prop-types';
import './searchBar.css';

class SearchBar extends React.Component {
  onSelectedGenreChange() {
    // const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select data-testid="select-input">
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
      </select>
    );
  }

  render() {
    return (
      <form className="search-bar" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input-label">
          Inclui o texto:
          <input data-testid="text-input" />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input data-testid="checkbox-input" type="checkbox" />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          { this.onSelectedGenreChange() }
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.func.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.func.isRequired,
// };

export default SearchBar;
