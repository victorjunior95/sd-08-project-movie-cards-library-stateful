import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    // const { movies } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.onClick } />
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
export default MovieLibrary;
