import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    this.setState({
      [target.name]: target.value === 'checkbox' ? target.checked : target.value,
    });
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  // filterMovie() {
  //   const { movies } = this.state;
  //   const { searchText, bookmarkedOnly, selectedGenre } = this.state;
  //   let filteredMovie = movies;
  //   if (bookmarkedOnly) {
  //     filteredMovie = filteredMovie.filter((movie) => movie.bookmarked);
  //   }
  //   this.setState({ movies: filteredMovie });
  // }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieLibrary;
