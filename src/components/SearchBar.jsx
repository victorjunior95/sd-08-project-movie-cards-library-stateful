import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
    // const searchText = this.props;
    // const onSearchTextChange = this.props;
    // const bookmarkedOnly = this.props;
    // const onBookmarkedChange = this.props;
    // const selectedGenre = this.props;
    // const onSelectedGenreChange = this.props;

    return (
      <form>
        <label>
          Inclui o texto
          <input type="text"/>
        </label>
        <br />
        <label>
          <input type="checkbox"/>
          Mostrar somente favoritos
        </label>
        <br />
        <label>
          Filtrar por gênero
          <select type="text">
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

// SearchBar.propTypes = {

// }

export default SearchBar;
// 1 - Crie um componente chamado <SearchBar />
// Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente <MovieList /> dependerá dos filtros escolhidos. <SearchBar /> deve receber como props:

// O que será verificado:

// Será validado se o componente <SearchBar />, recebendo as devidas props, renderiza com sucesso
