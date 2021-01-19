import React from 'react';

class SearchBar extends React.Component {
  
  inputText(searchText, onSearchTextChange) {
    return (
        <label data-testid="text-input-label">
          Inclui o texto:
          <input onChange={ onSearchTextChange } name="searchText" value={ searchText } type="text" data-testid="text-input" />
        </label>
    );
  }

  inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input onChange={ onBookmarkedChange } checked={ bookmarkedOnly } type="checkbox" data-testid="checkbox-input" />
        </label>
    );
  }

  selectGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <select onChange={ onSelectedGenreChange } value={ selectedGenre } data-testid="select-input">
      <label data-testid="select-input-label">
      Filtrar por gênero
        <input/>
        <option value={""} data-testid="select-option">Todos</option>
        <option value={"action"} data-testid="select-option">Ação</option>
        <option value={"comedy"} data-testid="select-option">Comédia</option>
        <option value={"thriller"} data-testid="select-option">Suspense</option>
      </label>
    </select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;    
    return (
      <form data-testid="search-bar-form">
        {this.inputText(searchText, onSearchTextChange)}
        {this.inputCheckBox(bookmarkedOnly, onBookmarkedChange)}
        {this.selectGenre(selectedGenre, onSelectedGenreChange)}       
      </form>
    )
  }
}

export default SearchBar;
