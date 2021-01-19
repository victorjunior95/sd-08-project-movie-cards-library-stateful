// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      movies,
      'text-input': '',
      'check-box': false,
      'select-input': '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, type, value, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  }

  handleAddMovie(movie) {
    this.setState(({ movies }) => {
      console.log(movies, movie);
      return { movies: [...movies, movie] };
    });
  }

  getFilteredMovies() {
    const { movies } = this.state;
    const { 'text-input': textInput, 'check-box': checkBox,
      'select-input': selectInput } = this.state;
    let result = [...movies];
    if (textInput) {
      result = result.filter((movie) => (
        movie.title.includes(textInput)
        || movie.subtitle.includes(textInput)
        || movie.storyline.includes(textInput)
      ));
    }
    if (selectInput) {
      result = result.filter((movie) => movie.genre.includes(selectInput));
    }
    if (checkBox) {
      result = result.filter((movie) => movie.bookmarked);
    }
    return result;
  }

  renderSearchBar() {
    const {
      'text-input': textInput,
      'check-box': checkBox,
      'select-input': selectInput,
    } = this.state;

    return (
      <SearchBar
        searchText={ textInput }
        bookmarkedOnly={ checkBox }
        selectedGenre={ selectInput }
        onBookmarkedChange={ this.handleChange }
        onSearchTextChange={ this.handleChange }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
      <div>
        { this.renderSearchBar() }
        <MovieList movies={ this.getFilteredMovies() } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
