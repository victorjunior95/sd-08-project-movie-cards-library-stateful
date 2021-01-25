// implement MovieLibrary component here
import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      /*  bookmarkedOnly: false,
      selectedGenre: '',  */
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    const { movies } = this.state;
    this.setState({
      searchText: event.target.value,
      movies: movies
        .filter((movie) => [movie.title, movie.subtitle]
          .some((item) => item.includes(event.target.value))),
    });
  }

  render() {
    const { searchText, movies } = this.state;
    return (
      <div>
        <SearchBar searchText={searchText} onSearchTextChange={this.onSearchTextChange} />
        <MovieList
          movies={movies}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(objectOf).isRequired,
};

export default MovieLibrary;
