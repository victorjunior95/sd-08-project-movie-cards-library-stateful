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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { movies } = this.state;
    this.setState(() =>({
      searchText: event.target.value,
      movies: movies.filter((movie) => movie.title.includes(event.target.value
        || movie.subtitle.includes(event.target.value))),
    }));
  }

  onBookmarkedChange(target) {
    const { movies } = this.state;
    this.setState(() => ({
      bookmarkedOnly: target.checked,
      movies: movies.filter((movie) => movie.bokmarked === checked) }));
  }

  // falta mudar selectedGenre!!!
  onSelectedGenreChange(target) {
    const { movies } = this.state;
    return (
      this.setState({
        selectedGenre: target.value,
        movies: movies
          .filter((movie) => movie.genre === target.option.selected) }));
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
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
