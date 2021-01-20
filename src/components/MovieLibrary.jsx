import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function MovieLibrary(props) {
  const { movies } = props;

  const handleAddMovie = (data) => {
    if (data) movies.push(data);
    console.log(movies);
  };
  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar />
      <br />
      <MovieList movies={ movies } />
      <br />
      <AddMovie movies={ movies } onClick={ handleAddMovie } />
    </div>
  );
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
