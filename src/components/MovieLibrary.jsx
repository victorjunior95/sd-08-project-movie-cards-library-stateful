import React from 'react';

import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };

    this.addNewMovie = this.onMovie.bind(this);
  }

  onMovie(dataMovie) {
    this.setState((eventState) => ({
      movies: [...eventState.movies, dataMovie],
    }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ this.onMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
