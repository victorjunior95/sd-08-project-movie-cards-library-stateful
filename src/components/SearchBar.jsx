import React from 'react';

class SearchBar extends React.Component {
  renderInputField(props) {
    return (
      <label data-testid="text-input-label" htmlFor="input-search">
        Inclui o texto
        <input
          name="input-search"
          type="text"
          value={ props.searchText }
          onChange={ props.onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  renderCheckBoxField(props) {
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="checkbox"
          checked={ props.bookmarkedOnly }
          onChange={ props.onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderSelectField(props) {
    const { selectedGenre, onSelectedGenreChange } = props;
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
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
    const objProps = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.renderInputField(objProps)}
        {this.renderCheckBoxField(objProps)}
        {this.renderSelectField(objProps)}
      </form>
    );
  }
}

export default SearchBar;
