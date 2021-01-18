import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.awaitTimer = 10;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState(() => ({ searchText: value }));
    setTimeout(() => {
      this.applyAllFilters();
    }, this.awaitTimer);
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState(() => ({ bookmarkedOnly: checked }));
    setTimeout(() => {
      this.applyAllFilters();
    }, this.awaitTimer);
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState(() => ({ selectedGenre: value }));
    setTimeout(() => {
      this.applyAllFilters();
    }, this.awaitTimer);
  }

  applyAllFilters() {
    const filteredMovies = this.filterAll(this.state);
    this.setState(() => ({ movies: filteredMovies }));
  }

  filterText(searchText) {
    const { movies } = this.props;
    let filteredArray = movies;
    if (searchText !== '') {
      filteredArray = movies.filter(
        ({ title, subtitle, storyline }) => (title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
        ),
      );
    }
    return filteredArray;
  }

  filterBook(moviesArrays, book) {
    let filteredArray = moviesArrays;
    if (book) {
      filteredArray = moviesArrays.filter(({ bookmarked }) => bookmarked);
    }
    return filteredArray;
  }

  filterGenre(moviesArrays, genreString) {
    let filteredArray = moviesArrays;
    if (genreString !== '') {
      filteredArray = moviesArrays.filter(({ genre }) => genreString === genre);
    }
    return filteredArray;
  }

  filterAll(currentState) {
    const { searchText, bookmarkedOnly, selectedGenre } = currentState;
    const firstFilter = this.filterText(searchText);
    const secondFilter = this.filterBook(firstFilter, bookmarkedOnly);
    const thirdFilter = this.filterGenre(secondFilter, selectedGenre);
    return thirdFilter;
  }

  addMovie(movieInfo) {
    this.setState((old) => {
      old.movies.push(movieInfo);
      return { movies: old.movies };
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
