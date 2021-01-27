import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "", // guarda o texto de busca por filmes
      bookmarkedOnly: false, // guarda um boolean que guarda se é para filtrar por filmes favoritados ou não
      selectedGenre: "", // guarda o gênero do filme selecionado para poder fazer a filtragem,
      movies: [] // guarda a lista de filmes
    }

  }

  // A callback para atualizar o estado de <MovieLibrary /> em searchText precisa ser passada para <SearchBar />;
  onSearchTextChange() {

  }

  // A callback para atualizar o estado de <MovieLibrary /> em bookmarkedOnly precisa ser passada para <SearchBar />;

  // A callback para atualizar o estado de <MovieLibrary /> em selectedGenre precisa ser passada para <SearchBar />.

  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ this.state.searchText }
          onSearchTextChange=""
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange=""
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange=""
        />
        <MovieList movies={ movies } />
        <AddMovie onClick="" />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
