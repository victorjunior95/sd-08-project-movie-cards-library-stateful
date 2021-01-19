import React, { useState } from "react";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

function MovieLibrary(props) {
  const { movies } = props;
  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar />
      <MovieList movies={movies} />
      <AddMovie />
    </div>
  );
}

export default MovieLibrary;
