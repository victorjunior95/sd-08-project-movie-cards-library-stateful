import React from 'react';

class SearchBar extends React.Component {
  inputText = () => {
    return (
      <label data-testid="text-input-label">
      Inclui o texto:
      <input
        type="text"
        name="searchText"
        value={ this.props.searchText }
        onChange={ this.props.onSearchTextChange }
        data-testid="text-input"
      />
    </label>
    )
  }
  
  inputCheckBox = () => {
    return (
      <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input 
            type="checkbox" 
            name="bookmarkedOnly"
            checked={ this.props.bookmarkedOnly } 
            onChange={ this.props.onBookmarkedChange } 
            data-testid="checkbox-input" 
          />
      </label>
    )
  }

  selectForm = () => {
    return (
      <label data-testid="select-input-label">
        Filtrar por gênero
        <select value={ this.props.selectedGenre } onChange={ this.props.onSelectedGenreChange } data-testid="select-input" name="selectedGenre">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    )
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        { this.inputText() }
        { this.inputCheckBox() }
        { this.selectForm() }
      </form>
    );
  }
}

export default SearchBar;
