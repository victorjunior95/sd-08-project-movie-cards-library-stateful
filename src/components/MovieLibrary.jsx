import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number }),
};

MovieLibrary.defaultProps = {
  movie: {
    title: 'Padrão',
    subtitle: 'Padrão',
    storyline: 'Padrão',
    imagePath: 'Padrão',
    rating: 0,
  } };

export default MovieLibrary;
