import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  getFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter(({ title }) => (
      title.includes(searchText)
    ));
  }

  render() {
    const filteredMovies = this.getFilteredMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
