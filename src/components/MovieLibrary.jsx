import React from 'react';
// import propTypes from 'propTypes';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(movies) {
    super(movies);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <main>
        <SearchBar />
        <MovieList />
        <AddMovie onClick={ () => console.log('teste') } />
      </main>
    );
  }
}

// propTypes {}

export default MovieLibrary;
