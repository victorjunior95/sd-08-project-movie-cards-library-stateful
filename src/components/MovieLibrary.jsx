import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  onClick() {
    console.log('clicou MovieLibraryonClick');
  }

  render() {
    return <AddMovie onClick={ this.onClick } />;
  }
}

export default MovieLibrary;
