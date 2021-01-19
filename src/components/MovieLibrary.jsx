import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  filterMovies(movies) {
    return movies
      .filter((movie) => (this.state.bookmarkedOnly ? movie.bookmarked === true : true))
      .filter((movie) => movie.genre.includes(this.state.selectedGenre))
      .filter(
        (movie) => movie.title
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
          || movie.subtitle
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase())
          || movie.storyline
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()),
      );
  }

  addNewMovie(movie) {
    // const movieAdded = this.state.movies.concat(movie);
    // this.setState({ movies: movieAdded });
    this.setState((oldState) => ({ movies: [...oldState.movies, movie] }));
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onBookmarkedChange={ this.onBookmarkedChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie onClick={ this.addNewMovie } />

      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.array.isRequired };

export default MovieLibrary;
