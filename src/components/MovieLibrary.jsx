// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'text-input': '',
      'check-box': false,
      'select-input': '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, type, value, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  }

  renderSearchBar() {
    const {
      'text-input': textInput,
      'check-box': checkBox,
      'select-input': selectInput,
    } = this.state;

    return (
      <SearchBar
        searchText={ textInput }
        bookmarkedOnly={ checkBox }
        selectedGenre={ selectInput }
        onBookmarkedChange={ this.handleChange }
        onSearchTextChange={ this.handleChange }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        { this.renderSearchBar() }
        { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
