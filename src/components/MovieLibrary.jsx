// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(name, type) {
    return ((event) => {
      this.setState({ [name]: type(event.target.value) });
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.changeState('searchText', String) }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.changeState('bookmarkedOnly', Boolean) }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.changeState('selectedGenre', String) }
      />
    );
  }
}

export default MovieLibrary;
