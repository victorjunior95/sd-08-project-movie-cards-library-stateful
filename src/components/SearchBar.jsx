import React from 'react';

class SearchBar extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="to-control">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          id="to-control"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <lable data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </lable>
    );
  }

  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.renderInputText}
        <label data-testid="checkbox-input-label" htmlFor="to-control2">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="to-control2"
          />
        </label>
        {this.renderSelect()}
      </form>
    );
  }
}

SearchBar.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.function,
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.function,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.function,
};

SearchBar.defaultProps = {
  selectedGenre: '',
  onSelectedGenreChange: () => 'teste',
  searchText: '',
  onSearchTextChange: () => 'teste',
  bookmarkedOnly: false,
  onBookmarkedChange: () => 'teste',
};

export default SearchBar;
