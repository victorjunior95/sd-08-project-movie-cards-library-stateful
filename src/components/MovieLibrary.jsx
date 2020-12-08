import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      Movies: this.props.movies,
      displayMovies: this.props.movies,
    };
    this.searchBarChange = this.searchBarChange.bind(this);
  }

  searchBarChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      (beforeState) => ({
        ...beforeState,
        [name]: value,
      }),
      this.updateDisplayMovies);
    return value;
  }


  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.searchBarChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.searchBarChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.searchBarChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };