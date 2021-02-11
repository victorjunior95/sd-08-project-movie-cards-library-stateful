import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFavMovie = this.handleFavMovie.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.onClick = this.onClick.bind(this);
    /* this.filterMovie = this.filterMovie.bind(this); */
  }

  handleInput({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleFavMovie({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  handleGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  onClick() {
    return ('oi');
  }

  /* filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filters = movies.filter((movie) => {
      if (bookmarkedOnly) return movie;
      movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText);
    });
  } */

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.handleInput }
          searchText={ searchText }
          onBookmarkedChange={ this.handleFavMovie }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleGenre }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
