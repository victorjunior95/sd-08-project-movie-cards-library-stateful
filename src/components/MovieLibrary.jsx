import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
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
      const moviesFilter = titleSearch.concat(searchSubtitle, searchStoryline);
      const moviesFilterAll = moviesFilter
      .filter((newMovies, i) => moviesFilter.indexOf(newMovies) ===1);

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
