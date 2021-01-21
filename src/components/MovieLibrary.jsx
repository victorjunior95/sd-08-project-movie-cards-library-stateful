import React from 'react';

import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.addNewMovie = this.onMovie.bind(this);
    this.callbackChange = this.callbackChange.bind(this);
  }

  onMovie(dataMovie) {
    this.setState((eventState) => ({
      movies: [...eventState.movies, dataMovie],
    }));
  }

  callbackChange({ target }) {
    const { name, type } = target;
    const value = type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    });
  }

  searchBar() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.callbackChange }
        onBookmarkedChange={ this.callbackChange }
        onSelectedGenreChange={ this.callbackChange }
      />
    );
  }

  render() {
    return (
      <div>
        {this.searchBar()}
        <AddMovie onClick={ this.onMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
