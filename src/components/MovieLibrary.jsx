// implement MovieLibrary component here
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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      newMovies: [...movies],
    };
    this.setFilterMovies = this.setFilterMovies.bind(this);
    this.setBookMarked = this.setBookMarked.bind(this);
    this.setFilterByGenre = this.setFilterByGenre.bind(this);
    this.subjectForm = this.subjectForm.bind(this);
  }

  setFilterMovies(event) {
    const { value } = event.target;
    const { searchText, newMovies } = this.state;
    this.setState({ searchText: value, movies: newMovies }, () => {
      const lowerText = searchText.toLowerCase();
      const filteredMovies = newMovies
        .filter((movie) => movie.title
          .toLowerCase().includes(lowerText)
        || movie.subtitle
          .toLowerCase().includes(value)
        || movie.storyline
          .toLowerCase().includes(value));
      this.setState({ movies: filteredMovies });
    });
  }

  setBookMarked(event) {
    const { movies } = this.state;
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked }, () => {
      const filteredMovies = movies
        .filter((movie) => movie.bookmarked === checked);
      this.setState({ movies: filteredMovies });
    });
  }

  setFilterByGenre(event) {
    const { value } = event.target;
    const { movies } = this.state;
    this.setState({ selectedGenre: value }, () => {
      const filteredMovies = movies
        .filter((movie) => movie.genre === value);
      this.setState({ movies: filteredMovies });
    });
  }

  subjectForm(newMovie) {
    const { movies } = this.state;
    this.setState(() => ({
      movies: [...movies, newMovie],
      newMovies: [...this.props.movies, newMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.setFilterMovies }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.setBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.setFilterByGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.subjectForm } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
