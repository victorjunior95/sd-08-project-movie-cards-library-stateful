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
    };
    const movies = props.movies;
  }

  render() {
    return (
      <div>
        <AddMovie />
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
