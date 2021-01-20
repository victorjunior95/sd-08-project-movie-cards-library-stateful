import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkCheckbox: false,
      selectGenre: '',
      movies: [...movies],
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(state) {
    state.rating = parseFloat(state.rating);
    this.setState(({ movies }) => ({
      movies: [...movies, state],
    }));
  }

  render() {
    const { searchText, bookmarkCheckbox, selectGenre, movies } = this.state;
    return (
      <main>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkCheckbox }
          selectedGenre={ selectGenre }
          onSearchTextChange={ this.onChange }
          onBookmarkedChange={ this.onChange }
          onSelectedGenreChange={ this.onChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
