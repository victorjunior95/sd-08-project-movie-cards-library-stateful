// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: {},
    };
  }

  handleAddedState(state) {
    this.setState({
      movies: state,
    });
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.handleAddedState } />
      </div>
    );
  }
}

export default MovieLibrary;
