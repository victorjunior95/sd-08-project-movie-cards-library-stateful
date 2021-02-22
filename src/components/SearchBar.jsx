import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          id="text-input"
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  renderCheckboxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          id="checkbox-input"
          type="checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  renderSelectedInput() {
    const { selectedGenre, onSelectGenreChange } = this.props;
    return (
      <label htmlFor="selected-input" data-testid="selected-input-label">
        Filtrar por gênero
        <input
          name="selectedGenre"
          id="selected-input"
          data-testid="selected-input"
          value={ selectedGenre }
          onChange={ onSelectGenreChange }
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <p>SearchBar</p>
        <form data-testid="search-bar-form">
          { this.renderTextInput() }
          { this.renderCheckboxInput() }
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

