import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    console.log('moviesArray');

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      [movies]: movies,
    };
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ () => 'oi' }
          bookmarkedOnly={ bookmarkedOnly }
          onBookMarkedChange={ () => 'oi' }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ () => 'oi' }
        />
        <AddMovie onClick={ () => console.log('foi') } />
        <span>
          { movies }
        </span>
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};
