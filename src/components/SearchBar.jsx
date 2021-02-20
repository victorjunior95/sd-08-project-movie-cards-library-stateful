// implement SearchBar component here
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly: book,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange: marked,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={searchText}
            data-testid="text-input"
            name="searchText"
            onChange={onSearchTextChange}
            type="text"
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            data-testid="checkbox-input"
            checked={book}
            name="bookmarkedOnly"
            onChange={marked}
            type="checkbox"
          />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={selectedGenre}
            name="selectedGenre"
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
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
