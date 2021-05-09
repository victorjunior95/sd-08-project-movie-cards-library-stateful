import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        data-testid="text-input-label"
        htmlFor="text-input"
      >
        Inclui o texto:
        <input
          data-testid="text-input"
          id="text-input"
          onChange={ onSearchTextChange }
          type="text"
          value={ searchText }
        />
      </label>
    );
  }

  inputCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="checkbox-input"
      >
        Mostrar somente favoritos
        <input
          checked={ bookmarkedOnly }
          data-testid="checkbox-input"
          id="checkbox-input"
          name="checkbox-input"
          onChange={ onBookmarkedChange }
          type="checkbox"
        />
      </label>
    );
  }

  select() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          data-testid="select-input"
          id="select-input"
          name="select-input"
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
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
    return (
      <form
        data-testid="search-bar-form"
      >
        { this.inputText() }
        { this.inputCheckbox() }
        { this.select() }
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
