import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      bookmarkedOnly: false,
      searchText: '',
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handFilterBook = this.handFilterBook.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    if (target.type !== 'checkbox') {
      this.setState(() => ({ [target.name]: target.value }));
    } else {
      this.setState(() => ({ [target.name]: target.checked }));
    }
  }

  handleFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const moviesResults = movies.filter((movie) => {
      if (selectedGenre === movie.genre) return movie;
      if (selectedGenre === '') return movie;
      return '';
    }).filter((movie) => {
      if (searchText === '') return movie;
      if (movie.title.includes(searchText) || (
        movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)
      )) {
        return movies;
      }
      return '';
    });
    return this.handFilterBook(bookmarkedOnly, moviesResults);
  }

  handFilterBook(bookmarkedOnly, movies) {
    return movies.filter((movie) => {
      if (!bookmarkedOnly) return movie;
      if (bookmarkedOnly === movie.bookmarked && bookmarkedOnly) {
        return movie;
      }
      return '';
    });
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    const movies = this.handleFilter();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MovieLibrary;
