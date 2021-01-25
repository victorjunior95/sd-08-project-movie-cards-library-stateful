import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  select(selectedGenre, onSeletedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSeletedGenreChange }
          data-testid="select-input"
        />
      </label>
    )
  }

  text(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <select
          name="searchText"
          value={ searchText }
          data-testid="text-input"
          onChange={ onSearchTextChange }
        >
          <option data-testid="select-option" value="thriller">Suspense</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>          
          <option data-testid="select-option" value="">Todos</option>
        </select>
      </label>
    );
  }

  checkboxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            name="checkbox-input"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            type="checkbox"
          />
        </label>
      </div>
    );
  }

  render() {
    const {
      searchText, onSearchTextChange, 
      bookmarkedOnly, onBookmarkedChange, 
      selectedGenre, onSeletedGenreChange
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">          
          {this.select(selectedGenre, onSeletedGenreChange)}
          {this.text(searchText, onSearchTextChange)}
          {this.checkboxInput(bookmarkedOnly, onBookmarkedChange)}
        </form>
      </div>
    );
  }
}

SearchBar.prototypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSeletedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
