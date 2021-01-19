// implement MovieLibrary component here
import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: [],
    };
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type !== 'CheckBox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
      </div>
    );
  }
}
/*
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
*/
export default MovieLibrary;
