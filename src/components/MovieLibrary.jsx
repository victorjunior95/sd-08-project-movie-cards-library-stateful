// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    }, () => this.filterMovies());
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, () => this.filterMovies());
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => this.filterMovies());
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  filterBookmark() {
    const { filteredMovies } = this.state;
    console.log(filteredMovies);
    console.log('ok 1');
    this.setState({ filteredMovies: filteredMovies.filter((movie) => movie.bookmarked) });
  }

  filterGenre(selectedGenre) {
    const { filteredMovies } = this.state;
    console.log('ok 2');
    console.log(selectedGenre);
    this.setState({ filteredMovies: filteredMovies
      .filter((movie) => movie.genre === selectedGenre) });
  }

  filterText(searchText) {
    const { filteredMovies } = this.state;
    console.log('ok 3');
    this.setState({ filteredMovies: filteredMovies
      .filter((movie) => [movie.title, movie.subtitle, movie.storyline]
        .some((content) => content.includes(searchText))) });
  }

  filterMovies() {
    const { selectedGenre, searchText, movies } = this.state;
    this.setState({ filteredMovies: movies }, () => {
      this.filterBookmark();
      this.filterGenre(selectedGenre);
      this.filterText(searchText);
    });
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
