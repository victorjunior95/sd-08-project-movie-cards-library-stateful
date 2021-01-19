import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: 'a',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: this.props.movies,
    };
    console.log(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    return (bookmarkedOnly === true
      ? this.setState({ bookmarkedOnly: false })
      : this.setState({ bookmarkedOnly: true }));
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  callbackParaAddmovie(state) {
    this.setState(state);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.callbackParaAddmovie } />
        {/* <MovieList movies={ movies.filter((elem) => elem.value.contains(searchText)) } /> */}
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;
