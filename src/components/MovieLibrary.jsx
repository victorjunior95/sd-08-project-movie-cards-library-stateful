import React from 'react';
import PropTypes from 'prop-types';

import searchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <section>
        <searchBar />
        <AddMovie />
        <MovieList movies={ movies } />
      </section>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
