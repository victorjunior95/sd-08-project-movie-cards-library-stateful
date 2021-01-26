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

    this.addNewMovie = this.addNewMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    console.log(name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    console.log(value);
  }

  filterMovies() {
    const { movies } = this.state;
    const resultado = movies.filter((parametro) => parametro.bookmarked === true);
    return resultado;
  }

  addNewMovie(objectOfMovies) {
    this.setState(({ movies }) => ({
      movies: [...movies, objectOfMovies],
    }));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    console.log('renderizou');
    return (
      <div>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
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
