// implement SearchBar component here



import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} data-testid="text-input"/>

        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input data-testid="checkbox-input" type="checkbox" value={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} checked/>

        <label data-testid="select-input-label">Filtrar por gênero</label>
        <select name="" id="" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange} data-testid="select-input">Filtrar por gênero
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
