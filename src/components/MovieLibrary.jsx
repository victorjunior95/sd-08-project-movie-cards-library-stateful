// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies: moviesList } = this.props;

    this.state = {
      movies: moviesList,
      originalMovies: moviesList,
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value }, () => {
      this.updateMovies();
    });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly }, () => {
      this.updateMovies();
    });
  }

  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value }, () => {
      this.updateMovies();
    });
  }

  updateMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, originalMovies } = this.state;
    let filter = originalMovies;
    if (searchText) {
      filter = filter.filter((e) => (e.title.includes(searchText)
        || e.subtitle.includes(searchText)
        || e.storyline.includes(searchText)));
    }
    if (selectedGenre) { filter = filter.filter((e) => e.genre === selectedGenre); }
    if (bookmarkedOnly) {
      filter = filter.filter((e) => e.bookmarked === bookmarkedOnly);
    }
    this.setState({ movies: filter });
  }

  addMovie(movie) {
    const { originalMovies } = this.state;
    this.setState({ originalMovies: originalMovies.concat(movie) }, () => {
      this.updateMovies();
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie addMovie={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
