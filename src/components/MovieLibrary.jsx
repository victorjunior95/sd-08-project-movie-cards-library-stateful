import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
      selected: [],
      movies: props.movies,
      allGenre: props.movies,
    };

    this.searchTextOn = this.searchTextOn.bind(this);
    this.bookmarkedOn = this.bookmarkedOn.bind(this);
    this.selectedGenreOn = this.selectedGenreOn.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  searchTextOn(event) {
    const { movies } = this.props;
    const { value } = event.target;

    const searchTitle = movies
      .filter((movie) => movie.title.toLowerCase().includes(value));
    const searchSubtitle = movies
      .filter((movie) => movie.subtitle.toLowerCase().includes(value));
    const searchStoryline = movies
      .filter((movie) => movie.searchStoryline.toLowerCase().includes(value));
    const moviesFilter = searchTitle.concat(searchSubtitle, searchStoryline);
    const moviesFilterAll = moviesFilter
      .filter((newMovies, i) => moviesFilter.indexOf(newMovies) === i);

    this.setState({
      [event.target.name]: event.target.value,
      movies: moviesFilterAll,
      allGenre: moviesFilterAll,
    });
  }

  bookmarkedOn(event) {
    const value = event.target.checked;
    const { movies, selected } = this.state;
    this.setState({
      selected: movies,
    });
    if (value === true) {
      const filter = movies.filter((movie) => movie.bookmarked);
      this.setState({
        [event.target.name]: event.target.checked,
        movies: filter,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.checked,
        movies: selected,
        allGenre: selected,
      });
    }
  }

  selectedGenreOn(event) {
    const { value } = event.target;
    const { allGenre } = this.state;

    if (value !== '') {
      const filter = allGenre.filter((movie) => movie.genre === value);
      this.setState({
        selectedGenre: value,
        movies: filter,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: allGenre,
      });
    }
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          searchTextOn={ this.searchTextOn }
          bookmarkedOnly={ bookmarkedOnly }
          bookmarkedOn={ this.bookmarkedOn }
          selectedGenre={ selectedGenre }
          selectedGenreOn={ this.selectedGenreOn }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </main>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
