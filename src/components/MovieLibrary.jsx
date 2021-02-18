import { render } from 'enzyme';
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { SearchBar }
        { AddMovie }
        <p>{ movies }</p>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
