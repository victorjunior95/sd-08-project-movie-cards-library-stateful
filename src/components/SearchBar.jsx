import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   searchText: '', // uma string
  //   //   onSearchTextChange: '', // uma callback
  //   //   bookmarkedOnly: false, // um boolean
  //   //   onBookmarkedChange: '', // uma callback
  //   //   selectedGenre: '', // uma string
  //   //   onSelectedGenreChange: '' // uma callback
  //   // }

  //   // this.searchText = this.searchText.bind(this);
  //   // this.onSearchTextChange = this.onSearchTextChange.bind(this);
  //   // this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
  //   // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  //   // this.selectedGenre = this.selectedGenre.bind(this);
  //   // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  // }

  // searchText(event) {

  // }

  // onSearchTextChange(event) {

  // }

  // bookmarkedOnly(event) {

  // }

  // onBookmarkedChange(event) {

  // }

  // selectedGenre(event) {

  // }

  // onSelectedGenreChange(event) {

  // }

  render() {
    const searchText = this.props;
    const onSearchTextChange = this.props;
    const bookmarkedOnly = this.props;
    const onBookmarkedChange = this.props;
    const selectedGenre = this.props;
    const onSelectedGenreChange = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <br />
        <label data-testid="checkbox-input-label">
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        <br />
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            type="text"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired
}

export default SearchBar;
