// implement SearchBar component here
import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <fomr className="search-bar" data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="search"
            name="search"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            placeholder="Pesquisar..."
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            value=""
            data-testid="checkbox-input"
            onChange={this.props.onBookmarkedChange}
            name="bookmark"
            checked={this.props.bookmarkedOnly}
          />
        </label>

        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="genre"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">
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
      </fomr>
    );
  }
}
