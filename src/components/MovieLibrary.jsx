import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovieAdd = this.newMovieAdd.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value,
    });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !bookmarkedOnly,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value,
    });
  }

  newMovieAdd() {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList />
        <AddMovie onClick={ this.newMovieAdd } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf.isRequired,
// };

export default MovieLibrary;
