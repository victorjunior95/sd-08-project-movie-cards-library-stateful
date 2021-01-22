import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibray extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange(text) {
    const { movies } = this.state;
    const moviesFiltered = movies.filter((movie) => movie.title === text);
    console.log(moviesFiltered);
  }

  onBookmarkedChange() {
    console.log('leo');
  }

  onSelectedGenreChange() {
    console.log('sardinha');
  }

  addNewMovie() {
    console.log('addnewmovie');
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    console.log(movies);
    return (
      <div>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

// MovieLibray.propTypes = {
//   movies: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     storyline: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     imagePath: PropTypes.string.isRequired,
//     map: PropTypes.func.isRequired,
//   }).isRequired,
// };

MovieLibray.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibray;
