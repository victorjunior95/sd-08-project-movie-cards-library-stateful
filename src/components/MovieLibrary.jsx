import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // this.addMovie = this.addMovie.bind(this);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
    };
  }

  // addMovie(movie) {
  //   const { movies } = this.state;
  //   this.setState({
  //     movies: [...movies, movie],
  //   });
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        {/* <MovieList movies={ movies } /> */}
        <AddMovie />

        {/* <AddMovie onClick={ this.addMovie } /> */}
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieLibrary;
