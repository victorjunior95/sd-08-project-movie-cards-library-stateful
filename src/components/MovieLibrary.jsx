// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
      movies: movies.filter((movie) => [movie.title, movie.subtitle, movie.storyline]
        .some((content) => content.includes(event.target.value))),
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
      movies: movies.filter((movie) => movie.bookmarked === event.target.checked),
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
      movies: movies.filter((movie) => movie.genre === event.target.value),
    });
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object),
}).isRequired;
