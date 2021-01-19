import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function MovieLibrary(props) {
  const { movies } = props;
  // const handleAddMovie = (e) => {
  //   // e.preventDefault();
  //   console.log('sss');
  // };
  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie />
      {/* <AddMovie onClick={ handleAddMovie } /> */}
    </div>
  );
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
