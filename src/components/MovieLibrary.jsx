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
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
    this.SearchBarChange = this.SearchBarChange.bind(this);
  }

  SearchBarChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      (beforeState) => ({
        ...beforeState,
        [name]: value,
      }),
      this.updateDisplayMovies,
    )
    return value;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.SearchBarChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.SearchBarChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.SearchBarChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
