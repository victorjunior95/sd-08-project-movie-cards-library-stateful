import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar />
        <AddMovie onClick={ () => console.log('foi') } />
        <span>
          ALÔ ALÔ
          { movies }
        </span>
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};
