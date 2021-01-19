import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function MovieLibrary(props) {
  const { movies } = props;

  const handleAddMovie = (data) => {
    // e.preventDefault();
    // console.log(data);
    if (data) movies.push(data);
  };
  return (
    <div>
      <h2> My awesome movie library </h2>
      <AddMovie movies={ movies } onClick={ handleAddMovie } />
      <br />
      <br />
      <MovieList movies={ movies } />
      <SearchBar />
    </div>
  );
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
