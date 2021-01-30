// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    const movie = movies;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movie,
    };

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarkedOnly = this.updateBookmarkedOnly.bind(this);
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  updateSearchText(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  updateBookmarkedOnly(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  updateSelectedGenre(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  addMovie(insertMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, insertMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;
