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
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedOnlyChange = this.onBookmarkedOnlyChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedOnlyChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMovies(movieList) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (searchText !== '') {
      movieList = movieList.filter((list) => list.title.includes(searchText)
        || list.subtitle.includes(searchText)
        || list.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      movieList = movieList.filter((list) => list.bookmarked === true);
    }
    if (selectedGenre !== '') {
      movieList = movieList.filter((list) => list.genre.includes(selectedGenre));
    }
    return movieList;
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.filterMovies(movies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedOnlyChange={ this.onBookmarkedOnlyChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
