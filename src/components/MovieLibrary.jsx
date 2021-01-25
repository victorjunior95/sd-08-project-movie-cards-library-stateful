import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    const {movies} = props;
  }

  render() {
    const {bookmarkedOnly, selectedGenre, searchText } = this.state;
    return (
      <div>
        <AddMovie />
        <SearchBar
        searchText={this.props.searchText}
        selectedGenre={this.props.selectedGenre}
        bookmarkedOnly={this.props.bookmarkedOnly}
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.protoType = {
  movies: PropTypes.arrayOf(
    PropTypes.)
}

export default MovieLibrary;
