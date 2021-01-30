// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Components {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, selectedGenre, onBookmarkedChange,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="text-input" id="text-input-label">
            Inclui o texto
            <input id="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } />
          </label>
          <label htmlFor="checkbox-input" id="checkbox-input-label">
            <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } id="checkbox-input" />
            Mostrar Somente Favoritos
          </label>
          <label id="select-input-label" htmlFor="select-input">
            Filtrar por gênero
          <select id="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange }>

          </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
